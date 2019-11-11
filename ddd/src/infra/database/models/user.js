const ObjectID = require('mongodb').ObjectID;
const { encryptPassword } = require('../../encryption');
const Email = require('../../support/email');

module.exports = ({ database }) => {
  const create = async user => {
    try {
      user.password = encryptPassword(user.password);
      const results = await database
        .get()
        .collection('users')
        .insertOne(user);
      return results.ops[0];
    } catch (e) {
      throw e;
    }
  };

  const getAll = async () => {
    try {
      const results = await database
        .get()
        .collection('users')
        .find()
        .toArray();
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findById = async id => {
    try {
      if (!ObjectID.isValid(id)) throw 'Invalid MongoDB ID.';
      const results = await database
        .get()
        .collection('users')
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
        .collection('users')
        .findOne(query);
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findByEmail = async email => {
    try {
      if (!Email.isValid(email)) throw 'Invalid email address';
      return await database
        .get()
        .collection('users')
        .findOne({ email: { $in: [email] } });
    } catch (e) {
      throw e;
    }
  };

  const update = async (userId, fields) => {
    try {
      const results = await database
        .get()
        .collection('users')
        .updateOne({ _id: { $eq: userId } }, { $set: fields });
      return results.ops[0];
    } catch (e) {
      throw e;
    }
  };

  return {
    create,
    getAll,
    findById,
    findOne,
    findByEmail,
    update
  };
};
