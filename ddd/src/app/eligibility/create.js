const { hseFilter, sseFilter } = require("src/domain/eligibility");

/**
 * Eligibility filter creation
 */
module.exports = ({ eligibilityRepository }) => {
  const create = async filter => {
    try {
      if (!filter.type || (filter.type !== "sse" && filter.type !== "hse")) {
        return {
          error: "A valid filter type is required"
        };
      }

      filter.published = filter.published
        ? new Date(filter.published, 1, 1)
        : new Date();

      const entity =
        filter.type === "sse" ? sseFilter(filter) : hseFilter(filter);

      return await eligibilityRepository.create(entity);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create
  };
};
