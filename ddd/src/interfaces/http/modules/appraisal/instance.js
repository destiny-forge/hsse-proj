const container = require("src/container");
const { create, get, compare } = require("src/app/appraisal");

module.exports = () => {
  const {
    repository: { appraisalRepository, articleRepository }
  } = container.cradle;

  const createUseCase = create({
    appraisalRepository
  });

  const getUseCase = get({
    appraisalRepository,
    articleRepository
  });

  const compareUseCase = compare({
    appraisalRepository,
    articleRepository
  });

  return {
    createUseCase,
    getUseCase,
    compareUseCase
  };
};
