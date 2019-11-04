const ObjectID = require('mongodb').ObjectID;
const { encryptPassword } = require('../../encryption');
const Email = require('../../support/email');

const create = async (collection, user) => {
  try {
    user.password = encryptPassword(user.password);
    const results = await collection.insertOne(user);
    return results.ops[0];
  } catch (e) {
    throw e;
  }
};

const getAll = async collection => {
  try {
    const results = await collection.find().toArray();
    return results;
  } catch (e) {
    throw e;
  }
};

const findById = async (collection, id) => {
  try {
    if (!ObjectID.isValid(id)) throw 'Invalid MongoDB ID.';
    const results = await collection.findOne(ObjectID(id));
    return results;
  } catch (e) {
    throw e;
  }
};

const findOne = async (collection, query) => {
  try {
    const results = await collection.findOne(query);
    return results;
  } catch (e) {
    throw e;
  }
};

const findByEmail = async (collection, email) => {
  try {
    if (!Email.isValid(email)) throw 'Invalid email address';
    const results = await collection.findOne({ email: { $in: [email] } });
    return results;
  } catch (e) {
    throw e;
  }
};

const update = async (collection, userId, fields) => {
  try {
    const results = await collection.updateOne(
      { _id: { $eq: userId } },
      { $set: fields }
    );
    return results.ops[0];
  } catch (e) {
    throw e;
  }
};

module.exports = { create, getAll, findById, findOne, findByEmail, update };
