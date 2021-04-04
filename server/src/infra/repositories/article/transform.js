const { hseArticle, sseArticle } = require("src/domain/article");

const toEntity = article => {
  return article.type === "hse" ? hseArticle(article) : sseArticle(article);
};

module.exports = {
  toEntity
};
