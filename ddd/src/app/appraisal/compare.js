const diff = require("deep-diff");
const _ = require("underscore");
const Appraisal = require("src/domain/appraisal");
const ObjectID = require("mongodb").ObjectID;

/**
 * Eligibility compare
 */
module.exports = ({ appraisalRepository }) => {
  const compare = async (articleId) => {
    if (!articleId) {
      return {
        error: "A valid articleId is required",
      };
    }

    try {
      const appraisals = await appraisalRepository.findByArticleId(articleId);

      if (appraisals.length < 2) {
        return {
          error: "Two appraisals are required in order to compare",
        };
      }

      const source = appraisals[0];
      const target = appraisals[1];

      const filter = (path, key) =>
        path.length === 0 &&
        ~["_id", "shortId", "userId", "role"].indexOf(key) < 0;

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
    appraisalRepository.update(source._id, { amstarStatus: "complete" });
    appraisalRepository.update(target._id, { amstarStatus: "complete" });
    appraisalRepository.create(resolution);
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
    compare,
  };
};
