const diff = require("deep-diff");

/**
 * Eligibility compare
 */
module.exports = ({ eligibilityRepository }) => {
  const compare = async (articleId, userId) => {
    if (!articleId) {
      return {
        error: "A valid articleId is required",
      };
    }
    if (!userId) {
      return {
        error: "A valid userId is required",
      };
    }
    try {
      const filters = await eligibilityRepository.findByArticleId(articleId);

      if (filters.length < 2) {
        return {
          error: "Two filters are required in order to compare",
        };
      }

      const source = filters[0].userId === userId ? filters[0] : filters[1];
      const target = filters[1].userId === userId ? filters[1] : filters[0];

      // re-map filters from array into objects
      source.filters = mapFilters(source.filters);
      target.filters = mapFilters(target.filters);

      const filter = (path, key) =>
        path.length === 0 &&
        ~[
          "_id",
          "shortId",
          "userId",
          "relevance",
          "completed",
          "complicated",
          "role",
          "selectedStatus",
        ].indexOf(key) < 0;

      const diffs = diff(source, target, filter);
      const differences = diffs || [];

      return differences;
    } catch (error) {
      throw new Error(error);
    }
  };

  const mapFilters = (filters) => {
    const objects = {};
    filters.forEach((filter) => {
      objects[filter] = true;
    });
    return objects;
  };

  return {
    compare,
  };
};
