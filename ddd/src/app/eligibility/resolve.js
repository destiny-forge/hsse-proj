const _ = require("underscore");
const { hseFilter, sseFilter } = require("src/domain/eligibility");
const ObjectID = require("mongodb").ObjectID;
const compare = require("./compare");

/**
 * Eligibility resolution
 */
module.exports = ({ eligibilityRepository }) => {
  const resolve = async (articleId, userId) => {
    try {
      const compareUseCase = compare({ eligibilityRepository });
      const differences = compareUseCase.compare(articleId, userId);

      if (differences.length > 0) {
        return {
          error: "Cannot resolve filters that still have conflicts",
        };
      }

      const filters = await eligibilityRepository.findByArticleId(articleId);

      if (filters.length < 2) {
        return {
          error: "Two filters are required in order to compare",
        };
      }

      const source = filters[0].userId === userId ? filters[0] : filters[1];
      const target = filters[1].userId === userId ? filters[1] : filters[0];

      return await completeResolution(source, target);
    } catch (error) {
      throw new Error(error);
    }
  };

  const completeResolution = async (source, target) => {
    const resolution = createResolution(source);
    eligibilityRepository.update(source._id, { completed: true });
    eligibilityRepository.update(target._id, { completed: true });
    return eligibilityRepository.create(resolution);
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
    resolve,
  };
};
