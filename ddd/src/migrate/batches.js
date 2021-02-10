const container = require("src/container");
const { load } = require("src/app/batch");

module.exports = (site) => {
  const {
    repository: { batchRepository },
  } = container.cradle;

  const loadUseCase = load({ batchRepository });

  const batches = require(`./data/${site.toUpperCase()}_Batches.json`);
  batches.map((batch) => loadUseCase.load(batch));
};
