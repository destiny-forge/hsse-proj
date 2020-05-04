const { hseFilter, sseFilter } = require("src/domain/eligibility");
const ObjectID = require("mongodb").ObjectID;

/**
 * Eligibility filter creation
 */
module.exports = ({ eligibilityRepository }) => {
  const create = async (filter) => {
    try {
      if (!filter.type || (filter.type !== "sse" && filter.type !== "hse")) {
        return {
          error: "A valid filter type is required",
        };
      }
      if (!filter.userId) {
        return {
          error: "A valid filter userId is required",
        };
      }

      if (filter._id) {
        const _id = filter._id;
        delete filter._id;

        filter.articleId = new ObjectID(filter.articleId);
        filter.userId = new ObjectID(filter.userId);

        return await eligibilityRepository.update(_id, filter);
      } else {
        filter.published = filter.published
          ? new Date(filter.published, 1, 1)
          : new Date();

        filter.articleId = new ObjectID(filter.articleId);
        filter.userId = new ObjectID(filter.userId);

        const entity =
          filter.type === "sse" ? sseFilter(filter) : hseFilter(filter);

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
