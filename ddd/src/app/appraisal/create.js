const Appraisal = require("src/domain/appraisal");

/**
 * Appraisal creation
 */
module.exports = ({ appraisalRepository }) => {
  const create = async appraisal => {
    try {
      if (
        !appraisal.type ||
        (appraisal.type !== "sse" && appraisal.type !== "hse")
      ) {
        return {
          error: "A valid appraisal type is required"
        };
      }

      // @TODO - ensure we are the owner of said appraisal
      if (appraisal._id) {
        const _id = appraisal._id;
        delete appraisal._id;
        return await appraisalRepository.update(_id, appraisal);
      } else {
        const entity = Appraisal(appraisal);
        return await appraisalRepository.create(entity);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create
  };
};
