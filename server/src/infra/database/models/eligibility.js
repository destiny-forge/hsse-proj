const ObjectID = require("mongodb").ObjectID;
const COLLECTION = "eligibility";

module.exports = ({ database }) => {
  const create = async (article) => {
    try {
      const results = await database
        .get()
        .collection(COLLECTION)
        .insertOne(article);
      return results.ops[0];
    } catch (e) {
      throw e;
    }
  };

  const getAll = async () => {
    try {
      const results = await database
        .get()
        .collection(COLLECTION)
        .find()
        .toArray();
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findByType = async (type) => {
    try {
      return await database
        .get()
        .collection(COLLECTION)
        .find({ type: { $eq: type } })
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const find = async (query) => {
    try {
      return await database.get().collection(COLLECTION).find(query).toArray();
    } catch (e) {
      throw e;
    }
  };

  const findById = async (id) => {
    try {
      if (!ObjectID.isValid(id)) throw "Invalid MongoDB ID.";
      const results = await database
        .get()
        .collection(COLLECTION)
        .findOne(ObjectID(id));
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findByArticleId = async (articleId) => {
    try {
      if (!ObjectID.isValid(articleId)) throw "Invalid MongoDB ID.";
      const results = await database
        .get()
        .collection(COLLECTION)
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
        .collection(COLLECTION)
        .findOne({
          articleId: { $eq: ObjectID(articleId) },
          userId: { $eq: ObjectID(userId) },
        });
      return results;
    } catch (e) {
      throw e;
    }
  };

  const update = async (id, fields) => {
    try {
      const cmdResult = await database
        .get()
        .collection(COLLECTION)
        .updateOne({ _id: { $eq: ObjectID(id) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const createIndexes = () => {
    const collection = database.get().collection(COLLECTION);
    collection.createIndex("type");
    collection.createIndex("articleId");
    collection.createIndex("userId");
  };

  return {
    create,
    getAll,
    findById,
    findByArticleId,
    findByType,
    findOne,
    find,
    update,
    createIndexes,
  };
};
