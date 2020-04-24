const Appraisal = require("src/domain/appraisal");
const ObjectID = require("mongodb").ObjectID;

/**
 * Appraisal creation
 */
module.exports = ({ appraisalRepository }) => {
  const create = async (appraisal) => {
    try {
      if (!appraisal.userId) {
        return {
          error: "A valid filter userId is required",
        };
      }

      const { numerator, denominator } = calculateAMStarRating(appraisal);
      appraisal.amstarNumerator = numerator;
      appraisal.amstarDenominator = denominator;

      if (appraisal._id) {
        const _id = appraisal._id;
        delete appraisal._id;
        return await appraisalRepository.update(_id, appraisal);
      } else {
        appraisal.articleId = new ObjectID(appraisal.articleId);
        appraisal.userId = new ObjectID(appraisal.userId);
        const entity = Appraisal(appraisal);
        return await appraisalRepository.create(entity);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const calculateAMStarRating = (appraisal) => {
    const questions = Object.entries(appraisal)
      .filter(([key, _value]) => key.indexOf("question") !== -1)
      .map(([_key, value]) => value);

    let numerator = questions.reduce(
      (acc, question) => acc + (question === "Yes" ? 1 : 0),
      0
    );
    let denominator = questions.reduce(
      (acc, question) => acc + (question !== "Not applicable" ? 1 : 0),
      0
    );
    return { numerator, denominator };
  };

  return {
    create,
  };
};
