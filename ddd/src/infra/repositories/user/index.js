const { toEntity } = require('./transform');
const { comparePassword } = require('../../encryption');

module.exports = ({ model }) => {
  const getAll = (...args) =>
    model.getAll(...args).then(entity =>
      entity.map(data => {
        const { dataValues } = data;
        return toEntity(dataValues);
      })
    );

  const create = async (...args) => {
    try {
      const user = await model.create(...args);
      return toEntity(user);
    } catch (err) {
      throw new Error(err);
    }
  };

  const update = (...args) =>
    model.update(...args).catch(error => {
      throw new Error(error);
    });

  const findById = (...args) =>
    model
      .findById(...args)
      .then(({ dataValues }) => toEntity(dataValues))
      .catch(error => {
        throw new Error(error);
      });

  const findOne = (...args) =>
    model
      .findOne(...args)
      .then(({ dataValues }) => toEntity(dataValues))
      .catch(error => {
        throw new Error(error);
      });

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
    validatePassword
  };
};
