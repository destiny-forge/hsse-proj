const { toEntity } = require("./transform");

module.exports = ({ model }) => {
  const getAll = async (...args) => {
    try {
      const appraisals = await model.getAll(...args);
      return appraisals.map((appraisal) => {
        return toEntity(appraisal);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByArticleId = async (articleId) => {
    try {
      const appraisals = await model.findByArticleId(articleId);
      return appraisals.map((appraisal) => {
        return toEntity(appraisal);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByType = async (type) => {
    try {
      const appraisals = await model.findByType(type);
      return appraisals.map((appraisal) => {
        return toEntity(appraisal);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const find = async (...args) => {
    try {
      const appraisals = await model.find(...args);
      return appraisals.map((appraisal) => {
        return toEntity(appraisal);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const create = async (...args) => {
    try {
      const appraisal = await model.create(...args);
      return toEntity(appraisal);
    } catch (err) {
      throw new Error(err);
    }
  };

  const update = async (...args) => {
    try {
      return model.update(...args);
    } catch (err) {
      throw new Error(err);
    }
  };

  const findById = async (...args) => {
    try {
      const appraisal = await model.findById(...args);
      return appraisal ? toEntity(appraisal) : null;
    } catch (err) {
      throw new Error(err);
    }
  };

  const findOne = async (...args) => {
    try {
      const appraisal = await model.findOne(...args);
      return appraisal ? toEntity(appraisal) : null;
    } catch (err) {
      throw new Error(err);
    }
  };

  return {
    getAll,
    create,
    update,
    findById,
    findByArticleId,
    findByType,
    find,
    findOne,
  };
};
