const reindex = require("./src/infra/search/reindex");

const execute = () => {
  const sites = ["hse", "sse"];
  sites.forEach(async (site) => {
    await reindex(site);
  });
};

execute();
