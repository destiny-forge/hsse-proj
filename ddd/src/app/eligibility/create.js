const { hseFilter, sseFilter } = require("src/domain/eligibility");
const ObjectID = require("mongodb").ObjectID;

/**
 * Eligibility filter creation
 */
module.exports = ({ eligibilityRepository }) => {
  const create = async (eligibility) => {
    try {
      if (
        !eligibility.type ||
        (eligibility.type !== "sse" && eligibility.type !== "hse")
      ) {
        return {
          error: "A valid filter type is required",
        };
      }
      if (!eligibility.userId) {
        return {
          error: "A valid filter userId is required",
        };
      }

      if (eligibility._id) {
        const _id = eligibility._id;
        delete eligibility._id;

        eligibility.articleId = new ObjectID(eligibility.articleId);
        eligibility.userId = new ObjectID(eligibility.userId);

        return await eligibilityRepository.update(_id, eligibility);
      } else {
        eligibility.published = eligibility.published
          ? new Date(eligibility.published, 1, 1)
          : new Date();

        eligibility.articleId = new ObjectID(eligibility.articleId);
        eligibility.userId = new ObjectID(eligibility.userId);

        const entity =
          eligibility.type === "sse"
            ? sseFilter(eligibility)
            : hseFilter(eligibility);

        return await eligibilityRepository.create(entity);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create,
  };
};
