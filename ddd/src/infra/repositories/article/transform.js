const { hseArticle, sseArticle } = require("src/domain/article");

const toEntity = article => {
  return article.type === "hse" ? hseArticle : sseArticle;
};

module.exports = {
  toEntity
};
