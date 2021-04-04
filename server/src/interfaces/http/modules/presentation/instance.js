const container = require("src/container");
const { list } = require("src/app/presentation");

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
