const { toEntity } = require("./transform");

module.exports = ({ model }) => {
  const getAll = async (...args) => {
    try {
      const articles = await model.getAll(...args);
      return articles.map((article) => {
        return toEntity(article);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByType = async (type) => {
    try {
      const articles = await model.findByType(type);
      return articles.map((article) => {
        return toEntity(article);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const find = async (type, stage, status) => {
    try {
      const articles = await model.find(type, stage, status);
      return articles.map((article) => {
        return toEntity(article);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByBatch = async (batchId) => {
    try {
      const articles = await model.findByBatch(batchId);
      return articles.map((article) => {
        return toEntity(article);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByBatchAndRefTypes = async (batchId, refTypes) => {
    try {
      const articles = await model.findByBatchAndRefTypes(batchId, refTypes);
      return articles.map((article) => {
        return toEntity(article);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const aggregate = async (type, stage, status, refTypes) => {
    try {
      const articles = await model.aggregate(type, stage, status, refTypes);
      return articles.map((article) => {
        return article;
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

  const assign = async (...args) => {
    try {
      return model.assign(...args);
    } catch (err) {
      throw new Error(err);
    }
  };

  const findById = async (...args) => {
    try {
      const article = await model.findById(...args);
      return article ? toEntity(article) : null;
    } catch (err) {
      throw new Error(err);
    }
  };

  const findOne = async (...args) => {
    try {
      const article = await model.findOne(...args);
      return article ? toEntity(article) : null;
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
    findByBatch,
    findByBatchAndRefTypes,
    aggregate,
    find,
    assign,
    findOne,
  };
};
