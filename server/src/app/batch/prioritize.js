const _ = require("underscore");

/**
 * Batch set priority
 */
module.exports = ({ batchRepository, articleRepository }) => {
  const prioritize = async (assignment) => {
    try {
      const { batchId, priority } = assignment;
      if (!batchId) {
        return {
          error: "A valid batch _id is required",
        };
      }

      if (!priority) {
        return {
          error: "A valid priority of 'high' or 'low' is required",
        };
      }

      const result = batchRepository.prioritize(assignment);
      articleRepository.prioritize(assignment);

      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    prioritize,
  };
};
