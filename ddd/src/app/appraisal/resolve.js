const _ = require("underscore");
const ObjectID = require("mongodb").ObjectID;
const Appraisal = require("src/domain/appraisal");
const compare = require("./compare");

/**
 * Apraisal resolution
 */
module.exports = ({ appraisalRepository }) => {
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

      const source =
        appraisals[0].userId === userId ? appraisals[0] : appraisals[1];
      const target =
        appraisals[1].userId === userId ? appraisals[1] : appraisals[0];

      return await completeResolution(source, target);
    } catch (error) {
      throw new Error(error);
    }
  };

  const completeResolution = async (source, target) => {
    const resolution = createResolution(source);
    appraisalRepository.update(source._id, { amstarStatus: "complete" });
    appraisalRepository.update(target._id, { amstarStatus: "complete" });
    return appraisalRepository.create(resolution);
  };

  const createResolution = (appraisal) => {
    const resolution = _.clone(appraisal);
    delete resolution._id;
    delete resolution.userId;
    delete resolution.shortId;
    resolution.amstarStatus = "complete";
    resolution.role = "system";

    resolution.articleId = new ObjectID(resolution.articleId);
    const entity = Appraisal(resolution);
    return entity;
  };

  return {
    resolve,
  };
};
