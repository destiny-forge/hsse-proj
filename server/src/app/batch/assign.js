const _ = require("underscore");

/**
 * Batch assignment
 */
module.exports = ({ batchRepository, articleRepository }) => {
  const assign = async (assignment) => {
    try {
      const { batchId, stage, type, userId } = assignment;

      if (!type || (type !== "junior" && type !== "senior")) {
        return {
          error: "A valid assignment type is required",
        };
      }

      if (!batchId) {
        return {
          error: "A valid batch _id is required",
        };
      }

      if (!userId) {
        return {
          error: "A valid user _id is required",
        };
      }

      if (
        !stage ||
        (stage !== "eligibility" &&
          stage !== "studies" &&
          stage !== "appraisals" &&
          stage !== "prioritizing" &&
          stage !== "translations")
      ) {
        return {
          error: "A valid assignment stage is required",
        };
      }

      assignment.status = "In Progress";

      const result = batchRepository.assign(assignment);
      articleRepository.assign(assignment);

      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    assign,
  };
};
