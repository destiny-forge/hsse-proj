const container = require("src/container");
const { latest } = require("src/app/article");

module.exports = () => {
  const {
    repository: { articleRepository },
  } = container.cradle;

  const latestUseCase = latest({ articleRepository });

  return {
    latestUseCase,
  };
};
