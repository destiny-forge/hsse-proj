const Batch = require("src/domain/batch");
const { parse } = require("./parse");

/**
 * Batch creation
 */
module.exports = ({ batchRepository }) => {
  const create = async batch => {
    try {
      // if (!article.type || (article.type !== "sse" && article.type !== "hse")) {
      //   return {
      //     error: "A valid file is required"
      //   };
      // }
      console.log(batch);

      const entity = Batch(batch);

      return await batchRepository.create(entity);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create
  };
};
