const Batch = require("src/domain/batch");
const { hseArticle, sseArticle } = require("src/domain/article");
const ObjectID = require("mongodb").ObjectID;
const shortid = require("shortid");

const { parse } = require("./parse");
const file = require("./file");
const { getLanguage } = require("./language");

/**
 * Batch creation
 */
module.exports = ({ batchRepository, articleRepository, config }) => {
  const create = async (batch) => {
    try {
      if (!batch.type || (batch.type !== "sse" && batch.type !== "hse")) {
        return {
          error: "A valid batch type is required",
        };
      }

      if (!batch.name) {
        return {
          error: "A valid batch name is required",
        };
      }

      const language = getLanguage(batch.language);

      // Create batch
      batch.uploaded = new Date();
      batch.harvested = new Date(batch.harvested);
      batch.shortId = shortid.generate();
      batch.name = `${batch.name} [${language}]`;

      const entity = Batch(batch);
      const newBatch = await batchRepository.create(entity);

      // Create articles from csv and associate with batch
      const { getFile } = file({ config, type: batch.type });
      const csv = await getFile(batch.fileUrl);
      const articles = await parse(csv);

      const shortids = articles.map((_article) => {
        return shortid.generate();
      });

      const result = articles.map(async (article, index) => {
        article.batchId = new ObjectID(newBatch._id);
        article.batchName = batch.name;
        article.published = new Date(batch.uploaded);
        article.harvested = new Date(batch.harvested);
        article.status = "New Article";
        article.shortId = shortids[index];

        let entity =
          batch.type === "sse" ? sseArticle(article) : hseArticle(article);

        return await articleRepository.create(entity);
      });

      return Promise.all(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create,
  };
};
