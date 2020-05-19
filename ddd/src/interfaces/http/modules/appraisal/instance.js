const container = require("src/container");
const { create, get, list, compare, resolve } = require("src/app/appraisal");

module.exports = () => {
  const {
    repository: { appraisalRepository, articleRepository },
  } = container.cradle;

  const createUseCase = create({
    appraisalRepository,
  });

  const getUseCase = get({
    appraisalRepository,
    articleRepository,
  });

  const listUseCase = list({
    articleRepository,
  });

  const compareUseCase = compare({
    appraisalRepository,
  });

  const resolveUseCase = resolve({
    appraisalRepository,
  });

  return {
    createUseCase,
    getUseCase,
    listUseCase,
    compareUseCase,
    resolveUseCase,
  };
};
