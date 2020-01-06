const Batch = require("src/domain/batch");
const { hseArticle, sseArticle } = require("src/domain/article");

const { parse } = require("./parse");
const file = require("./file");

/**
 * Batch creation
 */
module.exports = ({ batchRepository, articleRepository, config }) => {
  const create = async batch => {
    try {
      if (!batch.type || (batch.type !== "sse" && batch.type !== "hse")) {
        return {
          error: "A valid batch type is required"
        };
      }
      // Create batch
      batch.uploaded = new Date();
      batch.harvested = new Date(batch.harvested);

      const entity = Batch(batch);
      const newBatch = await batchRepository.create(entity);

      // Create articles from csv and associate with batch
      const { getFile } = file({ config, type: batch.type });
      const csv = await getFile(batch.fileUrl);
      const articles = await parse(csv);
      
      const result = articles.map(async article => {
        article.batchId = newBatch._id;
        article.published = new Date(batch.uploaded);
        article.harvested = new Date(batch.harvested);

        const entity =
          batch.type === "sse" ? sseArticle(article) : hseArticle(article);

        return await articleRepository.create(entity);
      });

      return Promise.all(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create
  };
};
