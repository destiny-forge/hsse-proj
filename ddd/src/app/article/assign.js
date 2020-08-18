const _ = require("underscore");

/**
 * Article assignment
 */
module.exports = ({ articleRepository }) => {
  const assign = async (assignment) => {
    try {
      const { articleId, stage, type, userId } = assignment;

      if (!type || (type !== "junior" && type !== "senior")) {
        return {
          error: "A valid assignment type is required",
        };
      }

      if (!articleId) {
        return {
          error: "A valid article _id is required",
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

      return await articleRepository.assign(assignment);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    assign,
  };
};
