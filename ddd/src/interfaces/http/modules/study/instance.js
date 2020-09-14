const container = require("src/container");
const { create, get, list, initEvents } = require("src/app/study");

module.exports = () => {
  const {
    repository: { studyRepository, articleRepository },
    events,
  } = container.cradle;

  const createUseCase = create({
    studyRepository,
    events,
  });

  const listUseCase = list({
    articleRepository,
    studyRepository,
  });

  const getUseCase = get({
    studyRepository,
    articleRepository,
  });

  initEvents({
    events,
    studyRepository,
    articleRepository,
  });

  return {
    createUseCase,
    getUseCase,
    listUseCase,
  };
};
