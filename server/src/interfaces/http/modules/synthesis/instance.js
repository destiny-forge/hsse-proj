const container = require("src/container");
const { create, list } = require("src/app/synthesis");

module.exports = () => {
  const {
    repository: { articleRepository, synthesisRepository },
  } = container.cradle;

  const createUseCase = create({
    articleRepository,
    synthesisRepository,
  });

  const listUseCase = list({
    synthesisRepository,
  });

  return {
    createUseCase,
    listUseCase,
  };
};
