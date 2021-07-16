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

  const getSubscribers = async (type, recipients) => {
    try {
      const results = await database
        .get()
        .collection(COLLECTION)
        .find({
          type: { $eq: type },
          email: { $in: recipients },
        })
        .toArray();
      return results;
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

  const update = async (email, type, fields) => {
    try {
      const cmdResult = await database
        .get()
        .collection(COLLECTION)
        .updateOne(
          { email: { $eq: email }, type: { $eq: type } },
          { $set: fields }
        );
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const toggle = async (email, type, query, subscribed) => {
    try {
      const cmdResult = await database
        .get()
        .collection(COLLECTION)
        .updateOne(
          {
            email: { $eq: email },
            type: { $eq: type },
            "subscriptions.query": query,
          },
          { $set: { "subscriptions.$.subscribed": subscribed } }
        );
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const changeEmail = async (type, old_email, new_email) => {
    try {
      const cmdResult = await database
        .get()
        .collection(COLLECTION)
        .updateOne(
          { email: { $eq: old_email }, type: { $eq: type } },
          { $set: { email: new_email } }
        );
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
    toggle,
    getSubscribers,
    changeEmail,
    createIndexes,
  };
};
