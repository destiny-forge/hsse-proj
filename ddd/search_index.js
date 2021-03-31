const index = require("./src/search-index");

const execute = () => {
  const sites = ["hse", "sse"];
  sites.forEach(async (site) => {
    await index.articles(site);
  });
};

execute();
