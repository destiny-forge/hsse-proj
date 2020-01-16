const container = require("src/container");
const { create, list } = require("src/app/eligibility");

module.exports = () => {
  const {
    repository: { eligibilityRepository }
  } = container.cradle;

  const createUseCase = create({
    eligibilityRepository
  });

  const listUseCase = list({
    eligibilityRepository
  });

  return {
    createUseCase,
    listUseCase
  };
};
