const { toEntity } = require("./transform");

module.exports = ({ model }) => {
  const getAll = async (...args) => {
    try {
      const batches = await model.getAll(...args);
      return batches.map((batch) => {
        return toEntity(batch);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByType = async (type) => {
    try {
      const batches = await model.findByType(type);
      return batches.map((batch) => {
        return toEntity(batch);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const create = async (...args) => {
    try {
      const batch = await model.create(...args);
      return toEntity(batch);
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
      const batch = await model.findById(...args);
      return toEntity(batch);
    } catch (err) {
      throw new Error(err);
    }
  };

  const findOne = async (...args) => {
    try {
      const batch = await model.findOne(...args);
      return toEntity(batch);
    } catch (err) {
      throw new Error(err);
    }
  };

  return {
    getAll,
    create,
    update,
    assign,
    findById,
    findByType,
    findOne,
  };
};
