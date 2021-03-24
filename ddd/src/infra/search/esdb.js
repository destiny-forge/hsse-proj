const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: process.env.ELASTIC_SEARCH_URL || "http://localhost:9200",
});

const init = async (index, mapping) => {
  return (
    Promise.resolve()
      .then(() => deleteIndex(index), handleError)
      .then(() => createIndex(index), handleError)
      .then(() => checkStatus(index), handleError)
      .then(() => closeIndex(index), handleError)
      //.then(() => putSettings(index, settings), handleError)
      .then(() => putMapping(index, mapping), handleError)
      .then(() => openIndex(index), handleError)
  );
};

const deleteIndex = async (index) => {
  console.log("Deleting old index ...");
  const exists = await client.indices.exists({ index });

  if (exists.statusCode != 404) {
    const body = await client.indices.delete({
      index,
    });
    return handleResolve(body);
  } else {
    return handleResolve({});
  }
};

const createIndex = async (index, _settings) => {
  console.log("Creating new index ...");
  const body = await client.indices.create({
    index,
    body: {
      settings: {
        index: {
          number_of_replicas: 0, // for local development
        },
      },
    },
  });
  return handleResolve(body);
};

// This isn't strictly necessary, but it solves a problem with closing
// the index before it has been created
const checkStatus = async (index) => {
  console.log("Checking status ...");
  const body = await client.cluster.health({
    index,
  });
  return handleResolve(body);
};

const openIndex = async (index) => {
  console.log("Open index ...");
  const body = await client.indices.open({
    index,
  });
  return handleResolve(body);
};

const closeIndex = async (index) => {
  console.log("Closing index ...");
  const body = await client.indices.close({
    index,
  });
  return handleResolve(body);
};

const putSettings = async (index, _settings) => {
  console.log("Put settings ...");
  const body = await client.indices.putSettings({
    index: index,
    body: {
      settings: {
        analysis: {
          analyzer: {
            folding: {
              tokenizer: "standard",
              filter: ["lowercase", "asciifolding"],
            },
          },
        },
      },
    },
  });
  return handleResolve(body);
};

const putMapping = async (index, mapping) => {
  console.log("Put mapping ...");
  const body = await client.indices.putMapping({
    index,
    body: mapping,
  });
  return handleResolve(body);
};

const index = async (index, doc) => {
  console.log("Indexing document ...");
  const { body } = await client
    .index({
      id: doc.shortId,
      index,
      refresh: "true",
      body: doc,
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(body);
  return handleResolve(body);
};

const bulk = async (docs) => {
  console.log("Bulk Indexing documents ...");
  const { body: bulkResponse } = await client
    .bulk({
      refresh: true,
      body: docs,
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(bulkResponse);

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
          operation: docs[i * 2],
          document: docs[i * 2 + 1],
        });
      }
    });
    console.log(erroredDocuments);
  }
  return handleResolve(bulkResponse);
};

const count = async (index) => {
  const { body: resp } = await client.count({ index });
  console.log(`${index} count = ${resp.count}`);
  return count;
};

const search = async (index, query) => {
  console.log("Searching ES ...");
  const resp = await client.search({
    index,
    body: {
      query,
    },
  });
  console.log(resp.body.hits);
  return handleResolve(resp);
};

function handleError(err) {
  console.error(JSON.stringify(err.body, null, 2));
  return Promise.reject();
}

function handleResolve(body) {
  if (!body.error) {
    console.log("\x1b[32m" + "Success" + "\x1b[37m");
  } else {
    console.log("\x1b[33m" + "Failed" + "\x1b[37m");
  }

  return Promise.resolve();
}

module.exports = {
  init,
  index,
  bulk,
  count,
  search,
};
