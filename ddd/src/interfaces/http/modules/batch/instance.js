const container = require("src/container");
const { create, list, file } = require("src/app/batch");

module.exports = () => {
  const {
    repository: { batchRepository },
    config
  } = container.cradle;

  const createUseCase = create({
    batchRepository
  });

  const listUseCase = list({
    batchRepository
  });

  const fileUseCase = file({ config });

  return {
    createUseCase,
    listUseCase,
    fileUseCase
  };
};
