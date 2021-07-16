const { toEntity } = require("./transform");

module.exports = ({ model }) => {
  const getAll = async (...args) => {
    try {
      const filters = await model.getAll(...args);
      return filters.map((filter) => {
        return toEntity(filter);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const getSubscribers = async (...args) => {
    try {
      const filters = await model.getSubscribers(...args);
      return filters.map((filter) => {
        return toEntity(filter);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const find = async (...args) => {
    try {
      const filters = await model.find(...args);
      return filters.map((filter) => {
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

  const toggle = async (...args) => {
    try {
      return model.toggle(...args);
    } catch (err) {
      throw new Error(err);
    }
  };

  const changeEmail = async (...args) => {
    try {
      return model.changeEmail(...args);
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
    getSubscribers,
    create,
    update,
    toggle,
    findOne,
    find,
    changeEmail,
  };
};
