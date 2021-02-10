const Batch = require("src/domain/batch");
const shortid = require("shortid");

/**
 * Batch importation
 */
module.exports = ({ batchRepository }) => {
  const load = async (batch) => {
    batch.name = batch.batch_name;

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
      batch.legacyId = batch.legacy_id;

      batch.uploaded = new Date(batch.uploaded);

      if (batch.harvested !== "") {
        batch.harvested = new Date(batch.harvested);
      } else {
        delete batch.harvested;
      }

      const entity = Batch(batch);
      return await batchRepository.create(entity);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return {
    load,
  };
};
