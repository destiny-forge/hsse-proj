const { toEntity } = require("./transform");
const { comparePassword, encryptPassword } = require("../../encryption");

module.exports = ({ model }) => {
  const getAll = async (...args) => {
    try {
      const users = await model.getAll(...args);
      return users.map(user => {
        return toEntity(user);
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  const create = async (...args) => {
    try {
      const user = await model.create(...args);
      return toEntity(user);
    } catch (err) {
      throw new Error(err);
    }
  };

  const update = async (...args) => {
    try {
      return model.update(...args);
    } catch (err) {
      throw new Error(err);
    }
  };

  const findById = async (...args) => {
    try {
      const user = await model.findById(...args);
      return toEntity(user);
    } catch (err) {
      throw new Error(err);
    }
  };

  const findOne = async (...args) => {
    try {
      const user = await model.findOne(...args);
      return toEntity(user);
    } catch (err) {
      throw new Error(err);
    }
  };

  const findByEmail = async (...args) => {
    try {
      const user = await model.findByEmail(...args);
      return user === null ? user : toEntity(user);
    } catch (err) {
      throw new Error(err);
    }
  };

  const validatePassword = endcodedPassword => password =>
    comparePassword(password, endcodedPassword);

  return {
    getAll,
    create,
    update,
    findById,
    findByEmail,
    findOne,
    validatePassword,
    encryptPassword
  };
};
