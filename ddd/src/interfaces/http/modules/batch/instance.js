const container = require("src/container");
const { create, list, assign, signature } = require("src/app/batch");

module.exports = () => {
  const {
    repository: { batchRepository, articleRepository },
    config,
  } = container.cradle;

  const createUseCase = create({
    batchRepository,
    articleRepository,
    config,
  });

  const listUseCase = list({
    batchRepository,
  });

  const assignUseCase = assign({
    articleRepository,
    batchRepository,
  });

  const signatureUseCase = signature({ config });

  return {
    createUseCase,
    assignUseCase,
    listUseCase,
    signatureUseCase,
  };
};
