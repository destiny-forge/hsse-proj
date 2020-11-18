const container = require("src/container");
const { list, assign, live } = require("src/app/prioritizing");

module.exports = () => {
  const {
    repository: { articleRepository, batchRepository },
  } = container.cradle;

  const listUseCase = list({
    articleRepository,
  });

  const assignUseCase = assign({
    articleRepository,
    batchRepository,
  });

  const liveUseCase = live({
    articleRepository,
    batchRepository,
  });

  return {
    listUseCase,
    assignUseCase,
    liveUseCase,
  };
};
