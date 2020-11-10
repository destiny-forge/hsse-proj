const container = require("src/container");
const {
  create,
  list,
  assign,
  signature,
  prioritize,
} = require("src/app/batch");

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

  const prioritizeUseCase = prioritize({
    articleRepository,
    batchRepository,
  });

  const signatureUseCase = signature({ config });

  return {
    createUseCase,
    assignUseCase,
    prioritizeUseCase,
    listUseCase,
    signatureUseCase,
  };
};
