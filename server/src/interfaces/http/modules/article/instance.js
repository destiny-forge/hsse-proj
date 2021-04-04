const container = require("src/container");
const {
  create,
  get,
  list,
  assign,
  latest,
  detail,
} = require("src/app/article");

module.exports = () => {
  const {
    repository: { articleRepository, batchRepository },
  } = container.cradle;

  const getUseCase = get({
    articleRepository,
  });

  const createUseCase = create({
    articleRepository,
    batchRepository,
  });

  const listUseCase = list({
    articleRepository,
  });

  const assignUseCase = assign({
    articleRepository,
  });

  const latestUseCase = latest({ articleRepository });
  const detailUseCase = detail({ articleRepository });

  return {
    getUseCase,
    latestUseCase,
    detailUseCase,
    createUseCase,
    listUseCase,
    assignUseCase,
  };
};
