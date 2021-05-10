const _ = require("underscore");
const { hseFilter, sseFilter } = require("src/domain/eligibility");
const ObjectID = require("mongodb").ObjectID;
const compare = require("./compare");

/**
 * Eligibility resolution
 */
module.exports = ({ articleRepository, eligibilityRepository }) => {
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

      eligibilityRepository.update(source._id, { completed: true });
      eligibilityRepository.update(target._id, { completed: true });

      const { _id, documentType, questionType, generalFocus } = source;
      return await articleRepository.update(articleId, {
        "stages.eligibility._id": new ObjectID(_id),
        "stages.eligibility.status": "Complete",
        documentType,
        questionType,
        generalFocus,
        filters: source.filters,
        //relevant?
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    resolve,
  };
};
