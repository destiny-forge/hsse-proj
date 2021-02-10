const { hseArticle, sseArticle } = require("src/domain/article");
const shortid = require("shortid");

/**
 * Article creation
 */
module.exports = ({ articleRepository }) => {
  const load = async (article) => {
    try {
      if (!article.type || (article.type !== "sse" && article.type !== "hse")) {
        return {
          error: "A valid article type is required",
        };
      }

      article.shortId = shortid.generate();

      article.legacyId = article.legacy_id;
      article.legacyBatchId = article.legacy_batch_id;

      if (article.published !== "") {
        article.published = new Date(article.published);
      } else {
        delete article.published;
      }

      if (article.harvested !== "") {
        article.harvested = new Date(article.harvested);
      } else {
        delete article.harvested;
      }

      // loop through summaries and fix Health-Evidence.ca keys
      article.summaries["Health-Evidence-ca"] =
        article.summaries["Health-Evidence.ca"];
      delete article.summaries["Health-Evidence.ca"];

      const entity =
        article.type === "sse" ? sseArticle(article) : hseArticle(article);

      return await articleRepository.create(entity);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return {
    load,
  };
};
