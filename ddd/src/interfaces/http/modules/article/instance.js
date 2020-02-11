const container = require("src/container");
const { create, get, list, assign } = require("src/app/article");

module.exports = () => {
  const {
    repository: { articleRepository }
  } = container.cradle;

  const getUseCase = get({
    articleRepository
  });

  const createUseCase = create({
    articleRepository
  });

  const listUseCase = list({
    articleRepository
  });

  const assignUseCase = assign({
    articleRepository
  });

  return {
    getUseCase,
    createUseCase,
    listUseCase,
    assignUseCase
  };
};
