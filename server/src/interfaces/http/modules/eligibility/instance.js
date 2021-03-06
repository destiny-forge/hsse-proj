const container = require("src/container");
const {
  create,
  get,
  list,
  compare,
  resolve,
  initEvents,
} = require("src/app/eligibility");

module.exports = () => {
  const {
    repository: { eligibilityRepository, articleRepository },
    events,
  } = container.cradle;

  const createUseCase = create({
    eligibilityRepository,
    events,
  });

  const getUseCase = get({
    eligibilityRepository,
    articleRepository,
  });

  const listUseCase = list({
    articleRepository,
  });

  const compareUseCase = compare({
    eligibilityRepository,
  });

  const resolveUseCase = resolve({
    articleRepository,
    eligibilityRepository,
  });

  initEvents({
    events,
    eligibilityRepository,
    articleRepository,
  });

  return {
    createUseCase,
    getUseCase,
    listUseCase,
    compareUseCase,
    resolveUseCase,
  };
};
