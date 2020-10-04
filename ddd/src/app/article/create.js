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
      return !article._id
        ? await createArticle(article)
        : await updateArticle(article);
    } catch (error) {
      //console.log(error);
      throw new Error(error);
    }
  };

  const createArticle = async (article) => {
    const batch = {
      type: article.type,
      fileUrl: "",
      referenceType: article.source,
      source: article.source,
      language: article.language,
      uploaded: new Date(),
      harvested: new Date(),
      shortId: shortid.generate(),
    };

    const newBatch = await batchRepository.create(Batch(batch));

    article.batchId = new ObjectID(newBatch._id);
    article.batchName = article.title;
    article.shortId = shortid.generate();

    article.published = article.published
      ? new Date(article.published, 1, 1)
      : new Date();

    const entity =
      article.type === "sse" ? sseArticle(article) : hseArticle(article);

    return await articleRepository.create(entity);
  };

  const updateArticle = async (article) => {
    const entity = Object.assign({}, article);
    delete entity._id;

    return await articleRepository.update(article._id, entity);
  };

  return {
    create,
  };
};
