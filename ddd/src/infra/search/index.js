const client = require("./esdb");

module.exports = () => {
  const init = async (index) => {
    return await client.init(index);
  };

  const index = async (index, doc) => {
    return await client.index(index, doc);
  };

  const search = async (query) => {
    return await client.search(query);
  };

  return {
    init,
    index,
    search,
  };
};
