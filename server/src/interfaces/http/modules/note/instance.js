const container = require("src/container");
const { create } = require("src/app/note");

module.exports = () => {
  const {
    repository: { articleRepository }
  } = container.cradle;

  const createUseCase = create({
    articleRepository
  });

  return {
    createUseCase
  };
};
