const shortid = require("shortid");
const mongodb = require("../infra/mongodb/standalone");

const JSONStream = require("JSONStream");
const fs = require("fs");
const path = require("path");

// load the extracts from disk
const extract = (site) => {
  const json = path.resolve(
    __dirname,
    `./data/${site.toUpperCase()}_Articles.json`
  );
  return fs.createReadStream(json);
};

// clean up data and add shortId
const transform = (article) => {
  article.shortId = shortid.generate();

  article.monthlyUpdateDate = article.monthlyUpdateDate.slice(0, 7);
  if (article.monthlyUpdateDate == "1900-01") {
    article.monthlyUpdateDate = "";
  }

  if (article.published !== "") {
    article.published = new Date(article.published);
  } else {
    delete article.published;
  }

  if (article.liveDate !== "") {
    article.liveDate = new Date(article.liveDate);
  } else {
    delete article.liveDate;
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

  // loop through the titles and fix up the nested "title" until J10 fixes
  for (const [key, value] of Object.entries(article.titles)) {
    article.titles[key] = value.title;
  }

  return article;
};

// bulk load articles into mongodb
const load = (transforms) => {
  mongodb.bulkWrite("articles", transforms);
};

module.exports = (site) => {
  let articles = [];
  const article_stream = extract(site);

  article_stream.pipe(JSONStream.parse("*")).on("data", (data) => {
    const transformed_article = transform(data);
    articles.push(transformed_article);

    if (articles.length === 10000) {
      article_stream.pause();
      load(articles);
      articles = [];
      article_stream.resume();
    }
  });

  article_stream.on("end", () => {
    load(articles);
    articles = [];
  });

  return null;
};
