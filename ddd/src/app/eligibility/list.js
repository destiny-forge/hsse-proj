/**
 * Eligibility batch article listing
 */
module.exports = ({ articleRepository }) => {
  const list = async (type, status) => {
    try {
      if (!type || (type !== "sse" && type !== "hse")) {
        return {
          error: "A valid article type is required",
        };
      }

      return await articleRepository.aggregate(type, "eligibility", status);
    } catch (error) {
      throw new Error(error);
    }
  };

  const listByBatch = async (batchId) => {
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

      return await articleRepository.findByBatch(
        batchId,
        "eligibility",
        status
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
    listByBatch,
  };
};
