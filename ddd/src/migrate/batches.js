const container = require("src/container");
const { load } = require("src/app/batch");

module.exports = (site) => {
  const {
    repository: { batchRepository },
  } = container.cradle;

  const loadUseCase = load({ batchRepository });

  const batches = require(`${site.toUpperCase()}_Batches.json`);
  const result = batches.map((batch) => loadUseCase(batch));
  console.log(result);
  return result;
};
