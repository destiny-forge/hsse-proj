const container = require("src/container");
const article = require("src/app/article");

module.exports = () => {
  const { search } = container.cradle;
  const searchUseCase = article.search({ search });
  const suggestUseCase = article.suggest({ search });
  return { searchUseCase, suggestUseCase };
};
