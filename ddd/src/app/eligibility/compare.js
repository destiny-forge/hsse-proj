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

      return compareFilters(filters, userId);
    } catch (error) {
      throw new Error(error);
    }
  };

  const compareFilters = (filters, userId) => {
    const first = filters[0];
    const second = filters[1];
    let source, target;

    if (first.userId == userId) {
      source = first;
      target = second;
    } else {
      source = second;
      target = first;
    }

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
  };

  const mapFilters = (filters) => {
    const objects = {};
    console.log(filters);
    filters.forEach((filter) => {
      objects[filter] = true;
    });
    return objects;
  };

  return {
    compare,
    compareFilters,
  };
};
