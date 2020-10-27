const container = require("src/container");
const { list, create } = require("src/app/translating");

module.exports = () => {
  const {
    repository: { articleRepository },
  } = container.cradle;

  const createUseCase = create({
    articleRepository,
  });

  const listUseCase = list({
    articleRepository,
  });

  return {
    createUseCase,
    listUseCase,
  };
};
