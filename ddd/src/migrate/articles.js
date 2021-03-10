const shortid = require("shortid");
const mongodb = require("./mongodb");
const esdb = require("./esdb");
require("array.prototype.flatmap").shim();

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

    return article; //.type === "sse" ? sseArticle(article) : hseArticle(article);
  });
};

// batch write to mongodb
const load = (transforms) => {
  mongodb.bulkWrite("articles", transforms);
};

// index the articles in elasticsearch
const index = (transforms) => {
  const fields = {
    id: { type: "integer" },
    text: { type: "text" },
    user: { type: "keyword" },
    time: { type: "date" },
  };
  const iresult = esdb.index("articles", fields);

  console.log(iresult);

  const articles = transforms.flatMap((doc) => [
    { index: { _index: "articles" } },
    doc,
  ]);

  esdb.bulk(articles);
  esdb.count(articles);
};

module.exports = (site) => {
  const extracts = extract(site);
  const transforms = transform(extracts);
  const results = load(transforms);
  index(transforms);
  return results;
};
