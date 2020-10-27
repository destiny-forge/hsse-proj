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

  const findByDocType = async (...args) => {
    try {
      const articles = await model.findByDocType(...args);
      return articles.map((article) => {
        return toEntity(article);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByBatch = async (...args) => {
    try {
      const articles = await model.findByBatch(...args);
      return articles.map((article) => {
        return toEntity(article);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByBatchAndDocTypes = async (batchId, docTypes, matches) => {
    try {
      const articles = await model.findByBatchAndDocTypes(
        batchId,
        docTypes,
        matches || []
      );
      return articles.map((article) => {
        return toEntity(article);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByLanguage = async (type, language, priority, status) => {
    try {
      const articles = await model.findByLanguage(
        type,
        language,
        priority,
        status
      );
      return articles.map((article) => {
        return toEntity(article);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const aggregate = async (type, stage, status, docTypes, optMatches) => {
    try {
      const articles = await model.aggregate(
        type,
        stage,
        status,
        docTypes,
        optMatches || []
      );
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

  const updateStage = async (...args) => {
    try {
      return model.updateStage(...args);
    } catch (err) {
      throw new Error(err);
    }
  };

  const updateTranslation = async (...args) => {
    try {
      return model.updateTranslation(...args);
    } catch (err) {
      throw new Error(err);
    }
  };

  const approveTranslation = async (...args) => {
    try {
      return model.approveTranslation(...args);
    } catch (err) {
      throw new Error(err);
    }
  };

  const updateStageCoderStatus = async (...args) => {
    try {
      return model.updateStageCoderStatus(...args);
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
    updateStage,
    updateStageCoderStatus,
    findById,
    findByType,
    findByBatch,
    findByBatchAndDocTypes,
    findByDocType,
    findByLanguage,
    approveTranslation,
    updateTranslation,
    aggregate,
    find,
    assign,
    findOne,
  };
};
