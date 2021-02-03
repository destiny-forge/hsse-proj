const container = require("src/container");
const { load } = require("src/app/article");

module.exports = (site) => {
  const {
    repository: { articleRepository },
  } = container.cradle;

  const loadUseCase = load({ articleRepository });

  const articles = require(`${site.toUpperCase()}_Articles.json`);
  const result = articles.map((article) => loadUseCase(article));
  console.log(result);
  return result;
  // load data from the filesystem, prep, import and return
};
