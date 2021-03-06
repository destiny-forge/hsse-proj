const container = require("src/container");
const { latest } = require("src/app/article");

module.exports = () => {
  const {
    repository: { articleRepository, updateRepository },
  } = container.cradle;

  const latestUseCase = latest({ articleRepository, updateRepository });

  return {
    latestUseCase,
  };
};
