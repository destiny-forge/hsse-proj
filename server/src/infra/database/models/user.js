const ObjectID = require("mongodb").ObjectID;
const { encryptPassword } = require("../../encryption");
const Email = require("../../support/email");

module.exports = ({ database }) => {
  const create = async (user) => {
    try {
      user.password = encryptPassword(user.password);
      const results = await database.get().collection("users").insertOne(user);
      // console.log(results);
      return results.ops[0];
    } catch (e) {
      throw e;
    }
  };

  const search = async (email, role) => {
    try {
      const query = {};

      if (email !== "") {
        query.email = { $regex: email.trim() };
      }

      if (role !== "*") {
        query.roles = { $in: [role] };
      }

      return await database.get().collection("users").find(query).toArray();
    } catch (e) {
      throw e;
    }
  };

  const findById = async (id) => {
    try {
      if (!ObjectID.isValid(id)) throw "Invalid MongoDB ID.";
      const results = await database
        .get()
        .collection("users")
        .findOne(ObjectID(id));
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findByEmail = async (type, email) => {
    try {
      if (!Email.isValid(email)) throw "Invalid email address";
      return await database
        .get()
        .collection("users")
        .findOne({ type: { $eq: type }, email: { $eq: email } });
    } catch (e) {
      throw e;
    }
  };

  const update = async (id, fields) => {
    try {
      const cmdResult = await database
        .get()
        .collection("users")
        .updateOne({ _id: { $eq: ObjectID(id) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const updateWithPassword = async (id, fields) => {
    fields.password = encryptPassword(fields.password);
    try {
      const cmdResult = await database
        .get()
        .collection("users")
        .updateOne({ _id: { $eq: ObjectID(id) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const createIndexes = () => {
    database.get().collection("users").createIndex("email");
  };

  return {
    create,
    update,
    updateWithPassword,
    search,
    findById,
    findByEmail,
    createIndexes,
  };
};
