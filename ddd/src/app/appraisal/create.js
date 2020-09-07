const _ = require("lodash");
const Appraisal = require("src/domain/appraisal");
const ObjectID = require("mongodb").ObjectID;

/**
 * Appraisal creation
 */
module.exports = ({ appraisalRepository, events }) => {
  const create = async (appraisal) => {
    try {
      if (!appraisal.userId) {
        return {
          error: "A valid userId is required",
        };
      }

      if (_.has(appraisal, "questions")) {
        const { numerator, denominator } = calculateAMStarRating(appraisal);
        appraisal.amstarNumerator = numerator;
        appraisal.amstarDenominator = denominator;
      }

      let result = null;

      appraisal.articleId = new ObjectID(appraisal.articleId);
      appraisal.userId = new ObjectID(appraisal.userId);

      if (appraisal._id) {
        const _id = appraisal._id;
        delete appraisal._id;
        result = await appraisalRepository.update(_id, appraisal);
      } else {
        const entity = Appraisal(appraisal);
        result = await appraisalRepository.create(entity);
      }

      events.emit("article.appraisals.coded", appraisal.articleId);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  const calculateAMStarRating = (appraisal) => {
    const answers = appraisal.questions.map((q) => q.value);
    let numerator = answers.reduce(
      (acc, answer) => acc + (answer === "Yes" ? 1 : 0),
      0
    );
    let denominator = answers.reduce(
      (acc, answer) => acc + (answer !== "Not applicable" ? 1 : 0),
      0
    );
    return { numerator, denominator };
  };

  return {
    create,
  };
};
