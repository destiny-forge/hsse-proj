const container = require("src/container");
const { list, create, approve } = require("src/app/translating");

module.exports = () => {
  const {
    repository: { articleRepository },
  } = container.cradle;

  const approveUseCase = approve({
    articleRepository,
  });

  const createUseCase = create({
    articleRepository,
  });

  const listUseCase = list({
    articleRepository,
  });

  return {
    approveUseCase,
    createUseCase,
    listUseCase,
  };
};
