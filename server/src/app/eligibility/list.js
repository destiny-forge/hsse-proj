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

      let statuses = [status, "Data entry complete"];
      if (status === "In progress") {
        statuses.push("Discrepancy detected");
      }

      return await articleRepository.aggregate(type, "eligibility", statuses);
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

      let status = [
        "New article",
        "In progress",
        "Discrepancy detected",
        "Data entry complete",
      ];

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
