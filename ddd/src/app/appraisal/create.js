const Appraisal = require("src/domain/appraisal");
const ObjectID = require("mongodb").ObjectID;

/**
 * Appraisal creation
 */
module.exports = ({ appraisalRepository }) => {
  const create = async appraisal => {
    try {
      // @TODO - ensure we are the owner of said appraisal
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

  return {
    create
  };
};
