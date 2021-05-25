const _ = require("underscore");
const ObjectID = require("mongodb").ObjectID;
const Appraisal = require("src/domain/appraisal");
const compare = require("./compare");

/**
 * Apraisal resolution
 */
module.exports = ({ articleRepository, appraisalRepository }) => {
  const resolve = async (articleId, userId) => {
    try {
      const compareUseCase = compare({ appraisalRepository });
      const differences = compareUseCase.compare(articleId, userId);

      if (differences.length > 0) {
        return {
          error: "Cannot resolve appraisals that still have conflicts",
        };
      }

      const appraisals = await appraisalRepository.findByArticleId(articleId);

      if (appraisals.length < 2) {
        return {
          error: "Two appraisals are required in order to compare",
        };
      }

      const source =
        appraisals[0].userId === userId ? appraisals[0] : appraisals[1];
      const target =
        appraisals[1].userId === userId ? appraisals[1] : appraisals[0];

      appraisalRepository.update(source._id, { completed: true });
      appraisalRepository.update(target._id, { completed: true });

      const {
        _id,
        questions,
        complicated,
        amstarNumerator,
        amstarDenominator,
        notInEnglish,
        noFreeFullText,
      } = source;

      return await articleRepository.update(articleId, {
        "stages.appraisals._id": new ObjectID(_id),
        "stages.appraisals.status": "Data entry complete",
        questions,
        complicated,
        amstarNumerator,
        amstarDenominator,
        notInEnglish,
        noFreeFullText,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return {
    resolve,
  };
};
