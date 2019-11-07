const { toEntity } = require('./transform');
const { comparePassword } = require('../../encryption');

// we also need to pass the db entity down through the repository
// to the model so that it can do db.collection('users').find...
module.exports = ({ model }) => {
  const getAll = (...args) =>
    model.getAll(...args).then(entity =>
      entity.map(data => {
        const { dataValues } = data;
        return toEntity(dataValues);
      })
    );

  const create = (...args) =>
    model.create(...args).then(({ dataValues }) => toEntity(dataValues));

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

  const validatePassword = endcodedPassword => password =>
    comparePassword(password, endcodedPassword);

  return {
    getAll,
    create,
    update,
    findById,
    findOne,
    validatePassword
  };
};
