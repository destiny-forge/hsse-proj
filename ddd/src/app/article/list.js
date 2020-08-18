/**
 * Article list
 */
module.exports = ({ articleRepository }) => {
  const list = async (type, stage, status) => {
    try {
      if (!type || (type !== "sse" && type !== "hse")) {
        return {
          error: "A valid article type is required",
        };
      }

      var filters = ["New Article", "In Progress", "Conflicted", "Complete"];

      return await articleRepository.aggregate(type, stage, filters);
    } catch (error) {
      throw new Error(error);
    }
  };

  const listByBatch = async (batchId, stage) => {
    try {
      if (!batchId) {
        return {
          error: "A valid batchId is required",
        };
      }

      if (!stage) {
        return {
          error: "A valid stage is required",
        };
      }

      let status = ["New Article", "In Progress", "Conflicted", "Complete"];
      // switch (stage) {
      //   case "eligibility":
      //     break;
      // }

      return await articleRepository.findByBatch(batchId, stage, status);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
    listByBatch,
  };
};
