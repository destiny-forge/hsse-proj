const { hseArticle, sseArticle } = require("src/domain/article");

/**
 * Article creation
 */
module.exports = ({ articleRepository }) => {
  const create = async article => {
    try {
      if (!article.type || (article.type !== "sse" && article.type !== "hse")) {
        return {
          error: "A valid article type is required"
        };
      }

      article.published = new Date(article.published);

      const entity =
        article.type === "sse" ? sseArticle(article) : hseArticle(article);

      return await articleRepository.create(entity);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create
  };
};
