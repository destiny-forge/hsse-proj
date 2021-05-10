const container = require("src/container");
const article = require("src/app/article");

module.exports = () => {
  const { search } = container.cradle;
  const searchUseCase = article.search({ client: search });
  const suggestUseCase = article.suggest({ client: search });
  return { searchUseCase, suggestUseCase };
};
