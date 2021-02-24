const { hseArticle, sseArticle } = require("../domain/article");
const shortid = require("shortid");
const db = require("./db");

// load the extracts from disk
const extract = (site) => {
  return require(`./data/${site.toUpperCase()}_Articles.json`);
};

// clean up data and add shortId
const transform = (articles) => {
  return articles.map((article) => {
    article.shortId = shortid.generate();
    article.legacyId = article.legacy_id;
    article.legacyBatchId = article.legacy_batch_id;

    if (article.published !== "") {
      article.published = new Date(article.published);
    } else {
      delete article.published;
    }

    if (article.harvested !== "") {
      article.harvested = new Date(article.harvested);
    } else {
      delete article.harvested;
    }

    // loop through summaries and fix Health-Evidence.ca keys
    article.summaries["Health-Evidence-ca"] =
      article.summaries["Health-Evidence.ca"];
    delete article.summaries["Health-Evidence.ca"];

    return article; //.type === "sse" ? sseArticle(article) : hseArticle(article);
  });
};

// batch write to mongodb
const load = (transforms) => {
  db.bulkWrite("articles", transforms);
};

module.exports = (site) => {
  const extracts = extract(site);
  const transforms = transform(extracts);
  const results = load(transforms);
  return results;
};
