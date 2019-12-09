const { toEntity } = require("./transform");

module.exports = ({ model }) => {
  const getAll = async (...args) => {
    try {
      const articles = await model.getAll(...args);
      return articles.map(article => {
        return toEntity(article);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByType = async type => {
    try {
      const articles = await model.findByType(type);
      return articles.map(article => {
        return toEntity(article);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const create = async (...args) => {
    try {
      const article = await model.create(...args);
      return toEntity(article);
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
      const article = await model.findById(...args);
      return toEntity(article);
    } catch (err) {
      throw new Error(err);
    }
  };

  const findOne = async (...args) => {
    try {
      const article = await model.findOne(...args);
      return toEntity(article);
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
    findOne
  };
};
