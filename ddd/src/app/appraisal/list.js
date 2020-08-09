/**
 * Appraisal list
 */
module.exports = ({ articleRepository }) => {
  const list = async (type, status) => {
    try {
      if (!type || (type !== "sse" && type !== "hse")) {
        return {
          error: "A valid article type is required",
        };
      }

      var filters = status;
      switch (status) {
        case "pending_assignment":
          filters = ["pending_assignment", "half_assigned"];
          break;
        case "assigned":
          filters = ["half_assigned", "assigned"];
          break;
      }

      const refTypes = [
        "Overviews of systematic reviews",
        "Systematic reviews of effects",
        "Systematic reviews addressing other questions",
      ];
      return await articleRepository.aggregate(
        type,
        "appraisals",
        filters,
        refTypes
      );
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
      const refTypes = [
        "Overviews of systematic reviews",
        "Systematic reviews of effects",
        "Systematic reviews addressing other questions",
      ];
      return await articleRepository.findByBatchAndRefTypes(batchId, refTypes);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
    listByBatch,
  };
};
