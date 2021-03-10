const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: process.env.ELASTIC_SEARCH_URL || "http://localhost:9200",
});

const index = async (index, properties) => {
  await client.indices.create(
    {
      index,
      body: {
        mappings: {
          properties,
        },
      },
    },
    { ignore: [400] }
  );
};

const bulk = async (docs) => {
  const { body: bulkResponse } = await client.bulk({ refresh: true, docs });

  if (bulkResponse.errors) {
    const erroredDocuments = [];
    // The items array has the same order of the dataset we just indexed.
    // The presence of the `error` key indicates that the operation
    // that we did for the document has failed.
    bulkResponse.items.forEach((action, i) => {
      const operation = Object.keys(action)[0];
      if (action[operation].error) {
        erroredDocuments.push({
          // If the status is 429 it means that you can retry the document,
          // otherwise it's very likely a mapping error, and you should
          // fix the document before trying again.
          status: action[operation].status,
          error: action[operation].error,
          operation: body[i * 2],
          document: body[i * 2 + 1],
        });
      }
    });
    console.log(erroredDocuments);
  }
};

const count = async (index) => {
  const { body: count } = await client.count({ index });
  console.log(`${index} count = ${count}`);
  return count;
};

module.exports = {
  index,
  bulk,
  count,
};
