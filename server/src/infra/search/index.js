const client = require("./esdb");

module.exports = () => {
  const index = async (index, doc) => {
    return await client.index(index, doc);
  };

  const search = async (query) => {
    return await client.search(query);
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
