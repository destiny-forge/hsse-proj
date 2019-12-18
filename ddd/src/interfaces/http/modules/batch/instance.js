const container = require("src/container");
const { create, list, file } = require("src/app/batch");

module.exports = () => {
  const {
    repository: { batchRepository, articleRepository },
    config
  } = container.cradle;

  const createUseCase = create({
    batchRepository,
    articleRepository,
    config
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
