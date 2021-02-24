const { MongoClient } = require("mongodb");
const config = require("../../config");

const bulkWrite = async (collection_name, docs) => {
  const uri = `${config.db.url}/${config.db.name}`;
  const client = new MongoClient(uri, config.db.options);
  try {
    await client.connect();

    const database = client.db(config.db.name);
    let collection = database.collection(collection_name);
    let ops = [],
      results = [];

    for (const doc of docs) {
      ops.push({ insertOne: { document: doc } });

      if (ops.length === 1000) {
        const result = await collection.bulkWrite(ops);
        results.push(result);
        ops = [];
      }
    }

    if (ops.length > 0) {
      const result = await collection.bulkWrite(ops);
      results.push(result);
    }

    return results;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

module.exports = {
  bulkWrite,
};
