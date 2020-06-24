const { hseArticle, sseArticle } = require("src/domain/article");
const Batch = require("src/domain/batch");
const ObjectID = require("mongodb").ObjectID;
const shortid = require("shortid");

/**
 * Article creation
 */
module.exports = ({ articleRepository, batchRepository }) => {
  const create = async (article) => {
    try {
      if (!article.type || (article.type !== "sse" && article.type !== "hse")) {
        return {
          error: "A valid article type is required",
        };
      }

      const batch = {
        type: article.type,
        fileUrl: "",
        referenceType: "system-generated",
        source: "single-article-upload",
        language: article.language,
        uploaded: new Date(),
        harvested: new Date(),
      };

      const newBatch = await batchRepository.create(Batch(batch));

      article.batchId = new ObjectID(newBatch._id);
      article.batchName = article.title;

      article.published = article.published
        ? new Date(article.published, 1, 1)
        : new Date();

      const entity =
        article.type === "sse" ? sseArticle(article) : hseArticle(article);

      return await articleRepository.create(entity);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create,
  };
};
