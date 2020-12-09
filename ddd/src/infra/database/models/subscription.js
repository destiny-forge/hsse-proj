const ObjectID = require("mongodb").ObjectID;
const COLLECTION = "subscriptions";

module.exports = ({ database }) => {
  const create = async (subscriber) => {
    try {
      const results = await database
        .get()
        .collection(COLLECTION)
        .insertOne(subscriber);
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

  const findOne = async (email, type) => {
    try {
      const results = await database
        .get()
        .collection(COLLECTION)
        .findOne({
          email: { $eq: email },
          type: { $eq: type },
        });
      return results;
    } catch (e) {
      throw e;
    }
  };

  const update = async (email, fields) => {
    try {
      const cmdResult = await database
        .get()
        .collection(COLLECTION)
        .updateOne({ email: { $eq: email } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const createIndexes = () => {
    const collection = database.get().collection(COLLECTION);
    collection.createIndex("email");
  };

  return {
    create,
    getAll,
    findOne,
    update,
    createIndexes,
  };
};
