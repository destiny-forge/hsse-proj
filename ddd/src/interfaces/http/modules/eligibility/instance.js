const container = require("src/container");
const { create, get, compare, resolve } = require("src/app/eligibility");

module.exports = () => {
  const {
    repository: { eligibilityRepository, articleRepository },
  } = container.cradle;

  const createUseCase = create({
    eligibilityRepository,
  });

  const getUseCase = get({
    eligibilityRepository,
    articleRepository,
  });

  const compareUseCase = compare({
    eligibilityRepository,
  });

  const resolveUseCase = resolve({
    articleRepository,
    eligibilityRepository,
  });

  return {
    createUseCase,
    getUseCase,
    compareUseCase,
    resolveUseCase,
  };
};
