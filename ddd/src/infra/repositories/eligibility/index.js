const { toEntity } = require("./transform");

module.exports = ({ model }) => {
  const getAll = async (...args) => {
    try {
      const filters = await model.getAll(...args);
      return filters.map(filter => {
        return toEntity(filter);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const find = async (...args) => {
    try {
      const filters = await model.find(...args);
      return filters.map(filter => {
        return toEntity(filter);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByType = async type => {
    try {
      const filters = await model.findByType(type);
      return filters.map(filter => {
        return toEntity(filter);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const create = async (...args) => {
    try {
      const filter = await model.create(...args);
      return toEntity(filter);
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
      const filter = await model.findById(...args);
      return filter ? toEntity(filter) : null;
    } catch (err) {
      throw new Error(err);
    }
  };

  const findOne = async (...args) => {
    try {
      const filter = await model.findOne(...args);
      return filter ? toEntity(filter) : null;
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
    findOne,
    find
  };
};
