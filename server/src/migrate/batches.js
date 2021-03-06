const shortid = require("shortid");
const mongodb = require("../infra/mongodb/standalone");

// load the extracts from disk
const extract = (site) => {
  return require(`./data/${site.toUpperCase()}_Batches.json`);
};

// clean up data and add shortId
const transform = (batches) => {
  return batches.map((batch) => {
    batch.name = batch.batch_name;
    batch.shortId = shortid.generate();
    batch.uploaded = new Date(batch.uploaded);

    delete batch.legacy_id;

    if (batch.harvested !== "") {
      batch.harvested = new Date(batch.harvested);
    } else {
      delete batch.harvested;
    }
    return batch;
  });
};

const load = (transforms) => {
  mongodb.bulkWrite("batches", transforms);
};

module.exports = (site) => {
  const extracts = extract(site);
  const transforms = transform(extracts);
  const results = load(transforms);
  return results;
};
