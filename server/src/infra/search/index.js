const client = require("./esdb");

module.exports = () => {
  const index = async (index, doc) => {
    return await client.index(index, doc);
  };

  const search = async (index, query) => {
    let results = await client.search(index, query);
    results = results.map((h) => h._source) || [];
    return results;
  };

  const reindex = async (index, docs) => {
    await client.init(index);
    await client.bulk(index, docs);
  };

  return {
    reindex,
    index,
    search,
  };
};

// Sample queries
// {
//     "query": {
//         "match": {
//           "legacyId": 75698
//         }
//     }
// }

// {
//   "query": {
//     "terms": {
//       "applied_filters": ["system"]
//     }
//   }
// }
