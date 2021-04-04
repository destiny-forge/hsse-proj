const { toEntity } = require("./transform");
const { comparePassword, encryptPassword } = require("../../encryption");
const _ = require("lodash");

module.exports = ({ model }) => {
  const search = async (...args) => {
    try {
      let users = await model.search(...args);
      return users.map((user) => {
        return _.omit(toEntity(user), [
          "password",
          "createdAt",
          "updatedAt",
          "confirmed",
        ]);
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
      console.log(err);
      throw new Error(err);
    }
  };

  const update = async (...args) => {
    try {
      return model.update(...args);
    } catch (err) {
      console.log(err);
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

  const findByEmail = async (...args) => {
    try {
      const user = await model.findByEmail(...args);
      return user === null ? user : toEntity(user);
    } catch (err) {
      throw new Error(err);
    }
  };

  const validatePassword = (endcodedPassword) => (password) =>
    comparePassword(password, endcodedPassword);

  return {
    create,
    search,
    update,
    findById,
    findByEmail,
    validatePassword,
    encryptPassword,
  };
};
