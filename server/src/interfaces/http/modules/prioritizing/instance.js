const container = require("src/container");
const { list, assign, live } = require("src/app/prioritizing");

module.exports = () => {
  const {
    repository: { articleRepository },
  } = container.cradle;

  const assignUseCase = assign({
    articleRepository,
  });

  const listUseCase = list({
    articleRepository,
  });

  const liveUseCase = live({
    articleRepository,
  });

  return {
    assignUseCase,
    listUseCase,
    liveUseCase,
  };
};
