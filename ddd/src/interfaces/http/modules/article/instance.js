const container = require("src/container");
const { create, list, assign } = require("src/app/article");

module.exports = () => {
  const {
    repository: { articleRepository }
  } = container.cradle;

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
    createUseCase,
    listUseCase,
    assignUseCase
  };
};
