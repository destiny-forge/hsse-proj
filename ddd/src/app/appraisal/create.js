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
          error: "A valid userId is required",
        };
      }

      if (!appraisal.questions) {
        return {
          error: "A questions array is required",
        };
      }

      if (!appraisal.role) {
        return {
          error: "A role is required",
        };
      }

      const { numerator, denominator } = calculateAMStarRating(appraisal);
      appraisal.amstarNumerator = numerator;
      appraisal.amstarDenominator = denominator;

      if (appraisal._id) {
        const _id = appraisal._id;
        delete appraisal._id;
        appraisal.articleId = new ObjectID(appraisal.articleId);
        appraisal.userId = new ObjectID(appraisal.userId);
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
