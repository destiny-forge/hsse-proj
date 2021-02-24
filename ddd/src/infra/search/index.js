const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: process.env.ELASTIC_SEARCH_URL || "http://localhost:9200",
});

module.exports = () => {
  const search = (query) => {
    const result = client.search(query);
    // we should filter out any ES related search things and instead
    // send just the array of articles back to the caller to keep things
    // clean and abstracted

    return result;
  };

  const index = () => {
    return;
  };

  return {
    index,
    search,
  };
};
