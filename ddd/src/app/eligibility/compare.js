const diff = require("deep-diff");
const _ = require("underscore");
const { hseFilter, sseFilter } = require("src/domain/eligibility");
const ObjectID = require("mongodb").ObjectID;

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

      const diffs = diff(target, source, filter);
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
    delete resolution._id;
    delete resolution.userId;
    delete resolution.shortId;
    resolution.completed = true;
    resolution.role = "system";

    resolution.articleId = new ObjectID(resolution.articleId);

    const entity =
      filter.type === "sse" ? sseFilter(resolution) : hseFilter(resolution);

    return entity;
  };

  return {
    compare,
  };
};
