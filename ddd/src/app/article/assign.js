const _ = require("underscore");

/**
 * Article assignment
 */
module.exports = ({ articleRepository }) => {
  const assign = async assignment => {
    try {
      const { articleId, stage, type, user } = assignment;
      
      if (!type || (type !== "junior" && type !== "senior")) {
        return {
          error: "A valid assignment type is required"
        };
      }

      if (!articleId) {
        return {
          error: "A valid article _id is required"
        };
      }

      if (!user._id) {
        return {
          error: "A valid user _id is required"
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
          error: "A valid assignment stage is required"
        };
      }

      const article = await articleRepository.findById(articleId);

      const other_type = type === "junior" ? "senior" : "junior";
      const has_stages = _.has(article, "stages");
      const has_stage = has_stages && _.has(article.stages, stage);
      const has_other_assignment =
        has_stage && _.has(article.stages[stage], other_type);

      if (stage === "eligibility" && !has_other_assignment) {
        assignment.status = "half_assigned";
      } else {
        assignment.status = "assigned";
      }

      return await articleRepository.assign(assignment);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    assign
  };
};
