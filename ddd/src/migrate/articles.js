const container = require("src/container");
const { load } = require("src/app/article");

module.exports = (site) => {
  const {
    repository: { articleRepository },
  } = container.cradle;

  const loadUseCase = load({ articleRepository });

  const articles = require(`./data/${site.toUpperCase()}_Articles.json`);
  articles.map((article) => loadUseCase.load(article));
};
