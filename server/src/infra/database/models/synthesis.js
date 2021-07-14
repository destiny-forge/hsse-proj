const ObjectID = require("mongodb").ObjectID;
const COLLECTION = "synthesis";

module.exports = ({ database }) => {
  const create = async (synthesis) => {
    try {
      const results = await database
        .get()
        .collection(COLLECTION)
        .insertOne(synthesis);
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

  const findOne = async (refId, type) => {
    try {
      const results = await database
        .get()
        .collection(COLLECTION)
        .findOne({
          refId: { $eq: refId },
          type: { $eq: type },
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
        .updateOne({ _id: { $eq: id } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const createIndexes = () => {
    const collection = database.get().collection(COLLECTION);
    collection.createIndex("refId");
  };

  return {
    create,
    getAll,
    findOne,
    update,
    createIndexes,
  };
};
