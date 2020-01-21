const ObjectID = require("mongodb").ObjectID;

const COLLECTION = "eligibility";

module.exports = ({ database }) => {
  const create = async article => {
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

  const findByType = async type => {
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

  const find = async (articleId, user) => {
    const { _id, type } = user;
    try {
      return await database
        .get()
        .collection(COLLECTION)
        .find({ articleId, user: { _id, type } })
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
        .collection(COLLECTION)
        .findOne(ObjectID(id));
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findOne = async query => {
    try {
      const results = await database
        .get()
        .collection(COLLECTION)
        .findOne(query);
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
    database
      .get()
      .collection(COLLECTION)
      .createIndex("type");
  };

  return {
    create,
    getAll,
    findById,
    findByType,
    findOne,
    find,
    update,
    createIndexes
  };
};
