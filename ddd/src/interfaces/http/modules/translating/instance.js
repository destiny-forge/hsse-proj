const container = require("src/container");
const { list } = require("src/app/translating");

module.exports = () => {
  const {
    repository: { articleRepository },
  } = container.cradle;

  const listUseCase = list({
    articleRepository,
  });

  return {
    listUseCase,
  };
};
