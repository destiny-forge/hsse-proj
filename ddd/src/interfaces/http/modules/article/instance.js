const container = require("src/container");
const { create, get, list, assign } = require("src/app/article");

module.exports = () => {
  const {
    repository: { articleRepository, batchRepository },
  } = container.cradle;

  const getUseCase = get({
    articleRepository,
  });

  const createUseCase = create({
    articleRepository,
    batchRepository,
  });

  const listUseCase = list({
    articleRepository,
  });

  const assignUseCase = assign({
    articleRepository,
  });

  return {
    getUseCase,
    createUseCase,
    listUseCase,
    assignUseCase,
  };
};
