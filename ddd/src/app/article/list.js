/**
 * Article list
 */
module.exports = ({ articleRepository }) => {
  const list = async (type, stage, status) => {
    try {
      if (!type || (type !== "sse" && type !== "hse")) {
        return {
          error: "A valid article type is required"
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

      return await articleRepository.aggregate(type, stage, filters);
    } catch (error) {
      throw new Error(error);
    }
  };

  const listByBatch = async batchId => {
    try {
      if (!batchId) {
        return {
          error: "A valid batchId is required"
        };
      }

      return await articleRepository.findByBatch(batchId);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
    listByBatch
  };
};
