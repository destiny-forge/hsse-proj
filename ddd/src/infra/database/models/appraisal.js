const ObjectID = require("mongodb").ObjectID;

module.exports = ({ database }) => {
  const create = async appraisal => {
    try {
      const results = await database
        .get()
        .collection("appraisals")
        .insertOne(appraisal);
      return results.ops[0];
    } catch (e) {
      throw e;
    }
  };

  const getAll = async () => {
    try {
      const results = await database
        .get()
        .collection("appraisals")
        .find()
        .toArray();
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findByType = async type => {
    try {
      return await database
        .get()
        .collection("appraisals")
        .find({ type: { $eq: type } })
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const find = async (type, stage, status) => {
    const filters = Array.isArray(status) ? { $in: status } : status;
    try {
      return await database
        .get()
        .collection("appraisals")
        .find({ type: { $eq: type }, [`stages.${stage}.status`]: filters })
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const findById = async id => {
    try {
      if (!ObjectID.isValid(id)) throw "Invalid MongoDB ID.";
      const results = await database
        .get()
        .collection("appraisals")
        .findOne(ObjectID(id));
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findByArticleId = async articleId => {
    try {
      if (!ObjectID.isValid(articleId)) throw "Invalid MongoDB ID.";
      const results = await database
        .get()
        .collection("appraisals")
        .find({ articleId: { $eq: ObjectID(articleId) } })
        .toArray();
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findOne = async (articleId, userId) => {
    try {
      const results = await database
        .get()
        .collection("appraisals")
        .findOne({
          articleId: { $eq: ObjectID(articleId) },
          userId: { $eq: ObjectID(userId) }
        });
      return results;
    } catch (e) {
      throw e;
    }
  };

  const assign = async assignment => {
    const { appraisalId, stage, type, user, status } = assignment;
    try {
      const fields = {
        [`stages.${stage}.${type}`]: user,
        [`stages.${stage}.status`]: status
      };
      const cmdResult = await database
        .get()
        .collection("appraisals")
        .updateOne({ _id: { $eq: ObjectID(appraisalId) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const update = async (id, fields) => {
    try {
      const cmdResult = await database
        .get()
        .collection("appraisals")
        .updateOne({ _id: { $eq: ObjectID(id) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const createIndexes = () => {
    const collection = database.get().collection("appraisals");
    collection.createIndex("type");
  };

  return {
    create,
    getAll,
    findById,
    findByArticleId,
    findByType,
    findOne,
    find,
    assign,
    update,
    createIndexes
  };
};
