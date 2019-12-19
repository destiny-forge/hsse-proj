const container = require("src/container");
const { create, list, signature } = require("src/app/batch");

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

  const signatureUseCase = signature({ config });

  return {
    createUseCase,
    listUseCase,
    signatureUseCase
  };
};
