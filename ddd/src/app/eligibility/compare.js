const diff = require("deep-diff");
const _ = require("underscore");

/**
 * Eligibility compare
 */
module.exports = ({ eligibilityRepository }) => {
  const compare = async (articleId) => {
    if (!articleId) {
      return {
        error: "A valid articleId is required",
      };
    }

    try {
      const filters = await eligibilityRepository.findByArticleId(articleId);

      if (filters.length < 2) {
        return {
          error: "Two filters are required in order to compare",
        };
      }

      const source = filters[0];
      const target = filters[1];

      const filter = (path, key) =>
        path.length === 0 &&
        ~[
          "_id",
          "shortId",
          "userId",
          "relevance",
          "completed",
          "complicated",
        ].indexOf(key) < 0;

      const diffs = diff(source, target, filter);
      const differences = diffs || [];

      if (differences.length === 0) {
        completeResolution(source, target);
      }

      return differences;
    } catch (error) {
      throw new Error(error);
    }
  };

  const completeResolution = (source, target) => {
    const resolution = createResolution(source);
    eligibilityRepository.update(source._id, { completed: true });
    eligibilityRepository.update(target._id, { completed: true });
    eligibilityRepository.create(resolution);
  };

  const createResolution = (filter) => {
    const resolution = _.clone(filter);
    delete filter._id;
    delete filter.userId;
    delete filter.shortId;
    filter.completed = true;
    resolution.role = "system";
  };

  return {
    compare,
  };
};
