const { Client } = require("@elastic/elasticsearch");

module.exports = () => {
  const client = new Client({ node: process.env.elasticsearch.nodes });

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
