const Batch = require("src/domain/batch");
const { hseArticle, sseArticle } = require("src/domain/article");

const { parse } = require("./parse");
const { s3 } = require("../../infra/aws");

/**
 * Batch creation
 */
module.exports = ({ batchRepository }) => {
  const create = async batch => {
    try {
      if (!batch.type || (batch.type !== "sse" && batch.type !== "hse")) {
        return {
          error: "A valid batch type is required"
        };
      }
      console.log(batch);

      // Create batch
      const entity = Batch(batch);
      const newBatch = await batchRepository.create(entity);

      // this needs an ._id to prevent another db call!
      console.log(newBatch);

      // Create articles from csv and associate to batch
      const csv = await s3.getFile(batch.fileUrl);
      const articles = await parse(csv);

      articles.map(async article => {
        article.batchId = newBatch._id;
        article.published = new Date(batch.published);
        article.harvested = new Date(batch.harvested);

        const entity =
          batch.type === "sse" ? sseArticle(article) : hseArticle(article);

        await articleRepository.create(entity);
      });

      return newBatch;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create
  };
};
