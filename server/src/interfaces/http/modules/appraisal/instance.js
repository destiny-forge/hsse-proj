const container = require("src/container");
const {
  create,
  get,
  list,
  compare,
  resolve,
  initEvents,
} = require("src/app/appraisal");

module.exports = () => {
  const {
    repository: { appraisalRepository, articleRepository },
    events,
  } = container.cradle;

  const createUseCase = create({
    appraisalRepository,
    events,
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
    articleRepository,
    appraisalRepository,
  });

  initEvents({
    events,
    appraisalRepository,
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
