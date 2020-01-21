const container = require("src/container");
const { create, get } = require("src/app/eligibility");

module.exports = () => {
  const {
    repository: { eligibilityRepository, articleRepository }
  } = container.cradle;

  const createUseCase = create({
    eligibilityRepository
  });

  const getUseCase = get({
    eligibilityRepository,
    articleRepository
  });

  return {
    createUseCase,
    getUseCase
  };
};
