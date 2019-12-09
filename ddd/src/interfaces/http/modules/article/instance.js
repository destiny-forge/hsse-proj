const container = require("src/container");
const { create, list } = require("src/app/article");

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

  return {
    createUseCase,
    listUseCase
  };
};
