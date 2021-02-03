const Batch = require("src/domain/batch");
const shortid = require("shortid");

/**
 * Batch importation
 */
module.exports = ({ batchRepository }) => {
  const load = async (batch) => {
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

      batch.shortId = shortid.generate();

      const entity = Batch(batch);
      return await batchRepository.create(entity);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    load,
  };
};
