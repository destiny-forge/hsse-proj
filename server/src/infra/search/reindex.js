const mongodb = require("../mongodb/standalone");
const esdb = require("./esdb");
const mappings = require("./es_templates/article_mappings");

const { Readable } = require("stream");
const transform = require("./transform");

function flatMap(arr, f) {
  return arr.reduce((r, x) => r.concat(f(x)), []);
}

// load the articles from the mongodb
const extract = async (site) => {
  const query = {
    type: site,
    status: "Completed",
    live: true,
    monthlyUpdateDate: { $ne: "" },
  };

  return await mongodb.find("articles", query);
};

// create the index mappings
const setupIndex = async (index) => {
  return await esdb.init(index, mappings);
};

const bulk_index = async (index, docs) => {
  const articles = flatMap(docs, (doc) => [{ index: { _index: index } }, doc]);
  return await esdb.bulk(articles);
};

const count_docs = async (index) => {
  return await esdb.count(index);
};

const reindex = async (site) => {
  let cache = [];
  const index = `${site}-articles`;

  await setupIndex(index);

  const articles = await extract(site);
  const article_stream = Readable.from(articles);

  article_stream.on("data", async (data) => {
    const transformed_article = transform(data);
    cache.push(transformed_article);

    if (cache.length === 10000) {
      article_stream.pause();
      await bulk_index(index, cache);
      await count_docs(index);
      cache = [];
      article_stream.resume();
    }
  });

  article_stream.on("end", async () => {
    await bulk_index(index, cache);
    await count_docs(index);
    cache = [];
  });

  return null;
};

module.exports = reindex;
