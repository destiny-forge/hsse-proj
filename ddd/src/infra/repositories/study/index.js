const { toEntity } = require("./transform");

module.exports = ({ model }) => {
  const getAll = async (...args) => {
    try {
      const studies = await model.getAll(...args);
      return studies.map((study) => {
        return toEntity(study);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const create = async (...args) => {
    try {
      const study = await model.create(...args);
      return toEntity(study);
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
      const study = await model.findById(...args);
      return toEntity(study);
    } catch (err) {
      throw new Error(err);
    }
  };

  const findOne = async (...args) => {
    try {
      const study = await model.findOne(...args);
      return study ? toEntity(study) : null;
    } catch (err) {
      throw new Error(err);
    }
  };

  return {
    getAll,
    create,
    update,
    findById,
    findOne,
  };
};
