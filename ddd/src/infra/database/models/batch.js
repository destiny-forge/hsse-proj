const ObjectID = require("mongodb").ObjectID;

module.exports = ({ database }) => {
  const create = async (batch) => {
    try {
      const results = await database
        .get()
        .collection("batches")
        .insertOne(batch);
      return results.ops[0];
    } catch (e) {
      throw e;
    }
  };

  const getAll = async () => {
    try {
      const results = await database
        .get()
        .collection("batches")
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
        .collection("batches")
        .find({ type: { $eq: type } })
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const findById = async (id) => {
    try {
      if (!ObjectID.isValid(id)) throw "Invalid MongoDB ID.";
      const results = await database
        .get()
        .collection("batches")
        .findOne(ObjectID(id));
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findOne = async (query) => {
    try {
      const results = await database.get().collection("batches").findOne(query);
      return results;
    } catch (e) {
      throw e;
    }
  };

  const update = async (id, fields) => {
    try {
      const cmdResult = await database
        .get()
        .collection("batches")
        .updateOne({ _id: { $eq: ObjectID(id) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const assign = async (assignment) => {
    const { batchId, stage, type, user, status } = assignment;
    const assign = {
      ...user,
      status: "In Progress",
    };
    try {
      const fields = {
        [`stages.${stage}.${type}`]: assign,
        [`stages.${stage}.status`]: status,
      };
      const cmdResult = await database
        .get()
        .collection("batches")
        .updateOne({ _id: { $eq: ObjectID(batchId) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const prioritize = async (assignment) => {
    const { batchId, priority } = assignment;
    try {
      const cmdResult = await database
        .get()
        .collection("batches")
        .updateMany(
          { _id: { $eq: ObjectID(batchId) } },
          { $set: { priority: priority } }
        );
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const createIndexes = () => {
    const collection = database.get().collection("batches");
    collection.createIndex("shortId");
    collection.createIndex("type");
  };

  return {
    create,
    getAll,
    findById,
    findByType,
    findOne,
    update,
    assign,
    prioritize,
    createIndexes,
  };
};
