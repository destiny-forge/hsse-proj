const ObjectID = require("mongodb").ObjectID;

module.exports = ({ database }) => {
  const create = async article => {
    try {
      const results = await database
        .get()
        .collection("articles")
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
        .collection("articles")
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
        .collection("articles")
        .find({ type: { $eq: type } })
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const find = async (type, stage) => {
    try {
      return await database
        .get()
        .collection("articles")
        .find({ type: { $eq: type }, stage: { $eq: stage } })
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
        .collection("articles")
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
        .collection("articles")
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
        .collection("articles")
        .updateOne({ _id: { $eq: ObjectID(id) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const createIndexes = () => {
    const collection = database.get().collection("articles");
    collection.createIndex("type");
    collection.createIndex("stage");
    collection.createIndex("status");
  };

  const migrate = () => {
    const collection = database.get().collection("articles");
    collection.updateMany(
      { junior: { $exists: false } },
      {
        $set: {
          junior: null,
          senior: null,
          stage: "eligibility",
          status: "needs_assignment"
        }
      },
      { multi: true, upsert: true }
    );
  };

  return {
    create,
    getAll,
    findById,
    findByType,
    findOne,
    find,
    update,
    createIndexes,
    migrate
  };
};
