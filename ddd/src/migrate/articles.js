const shortid = require("shortid");
const mongodb = require("./mongodb");
const esdb = require("../infra/search/esdb");
const mappings = require("../infra/search/es_templates/article_mappings");

const flatMap = (arr, f) => arr.reduce((r, x) => r.concat(f(x)), []);

// load the extracts from disk
const extract = (site) => {
  return require(`./data/${site.toUpperCase()}_Articles.json`);
};

// clean up data and add shortId
const transform = (articles) => {
  return articles.map((article) => {
    article.shortId = shortid.generate();

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

    return article;
  });
};

// batch write to mongodb
const load = (transforms) => {
  mongodb.bulkWrite("articles", transforms);
};

// index the articles in elasticsearch
const index = (transforms) => {
  transforms = transforms.map((t) => {
    t.id = t.shortId;
    t.applied_filters = t.filters;
    delete t.filters;
    return t;
  });

  const articles = flatMap(transforms, (doc) => [
    { index: { _index: `${doc.type}-articles` } },
    doc,
  ]);

  Promise.resolve()
    .then(() => esdb.init("hse-articles", mappings))
    .then(() => esdb.init("sse-articles", mappings))
    .then(() => esdb.bulk(articles))
    .then(() => esdb.count("hse-articles"))
    .then(() => esdb.count("sse-articles"));
};

module.exports = (site) => {
  const extracts = extract(site);
  const transforms = transform(extracts);
  //const results = load(transforms);
  index(transforms);
  return null;
};
