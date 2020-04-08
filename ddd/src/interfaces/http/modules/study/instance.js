const container = require("src/container");
const { create, get } = require("src/app/study");

module.exports = () => {
  const {
    repository: { studyRepository, articleRepository },
  } = container.cradle;

  const createUseCase = create({
    studyRepository,
  });

  const getUseCase = get({
    studyRepository,
    articleRepository,
  });

  return {
    createUseCase,
    getUseCase,
  };
};
