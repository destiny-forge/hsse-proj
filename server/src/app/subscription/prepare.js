const ejs = require("ejs");
const _ = require("underscore");
const DateHelper = require("./date");
const { hse, sse } = require("./data");
const path = require("path");

/**
 * Generate HTML output for monthly email manager
 * by massaging the article data into a flattened
 * structure so limited filtering is required reducing
 * the complexity of the template logic for generating
 * HTML
 */

const prepare = async (searchClient, articleRepository, recipient, date) => {
  if (!recipient) {
    return {
      error: "A valid recipient is required",
    };
  }

  try {
    let { year, month } = DateHelper.getYearMonth(date);
    let filters = recipient.type === "hse" ? hse.filters : sse.filters;
    let hot_docs = [];

    let subs = "";
    const es_index = `${recipient.type}-articles`;
    const sub_count = recipient.subscriptions.length;

    // loop through subs and generate HTML template artifacts
    for (const [index, sub] of recipient.subscriptions.entries()) {
      let query = {
        //[`title${subscription.lang.toUpperCase()}`]: "test",
        //monthly_update needs to be here
        terms: {
          applied_filters: sub.filters,
        },
      };

      const search_results = await searchClient.search(es_index, query);
      const ids = search_results.map((r) => r.id);

      //console.log(search_results);
      //console.log(ids);

      const articles = await articleRepository.findByShortIds(ids);
      let types = _.uniq(_.without(_.pluck(articles, "documentType"), ""));

      hot_docs = hot_docs.concat(
        articles.filter((article) => article.hotDocs === true)
      );

      //console.log(articles);

      let keywords = [];
      let data = {
        index,
        types,
        sub_count,
        filters: [],
        articles: {},
      };

      let baseURL = "";
      switch (recipient.type) {
        case "hse":
          baseURL = "https://www.socialsystemsevidence.org/articles/";
          break;
        case "sse":
          baseURL = "https://www.healthsystemsevidence.org/articles/";
          break;
      }

      articles.forEach((article) => {
        let focus = article.generalFocus ? "General" : "Specific";
        if (!data.articles.hasOwnProperty(article.documentType)) {
          data.articles[article.documentType] = {};
        }

        if (!data.articles[article.documentType].hasOwnProperty(focus)) {
          data.articles[article.documentType][focus] = [];
        }

        article.href = `${baseURL}${article.shortId}?Effectsofh&amp;source=search_subscriptions`;
        article.safeURL = `https://www.google.com/url?q=${article.href}&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw`;

        data.articles[article.documentType][focus].push(article);
        const filter_titles = filters
          .filter((f) => _.contains(article.filters, f.key))
          .map((f) => f.title);
        keywords = keywords.concat(filter_titles);
      });

      data.filters = _.uniq(keywords);
      const filename = `templates/${recipient.type}-subscription-block.html`;
      let template = path.join(__dirname, filename);
      let html = await ejs.renderFile(template, data);
      subs += html;
    }

    hot_docs = _.uniq(hot_docs);

    const data = {
      month,
      year,
      hot_docs,
      subs,
    };

    const filename = `templates/${recipient.type}-monthly-email.html`;
    let template = path.join(__dirname, filename);
    let html = await ejs.renderFile(template, data);

    return html;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = prepare;
