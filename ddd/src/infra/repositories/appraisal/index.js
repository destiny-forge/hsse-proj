const { toEntity } = require("./transform");

module.exports = ({ model }) => {
  const getAll = async (...args) => {
    try {
      const appraisals = await model.getAll(...args);
      return appraisals.map(appraisal => {
        return toEntity(appraisal);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByType = async type => {
    try {
      const appraisals = await model.findByType(type);
      return appraisals.map(appraisal => {
        return toEntity(appraisal);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const find = async (type, stage, status) => {
    try {
      const appraisals = await model.find(type, stage, status);
      return appraisals.map(appraisal => {
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

  const assign = async (...args) => {
    try {
      return model.assign(...args);
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
    findByType,
    find,
    assign,
    findOne
  };
};
