const { create } = require('./create');
const { update } = require('./update');
const { getAll, getById, getByEmail } = require('./get');

/* User service api */

module.exports = {
  create,
  update,
  getAll,
  getById,
  getByEmail
};
