const create = require("./create");
const list = require("./list");
const assign = require("./assign");
const get = require("./get");
const search = require("./search");
const suggest = require("./suggest");
const detail = require("./detail");
const latest = require("./latest");

module.exports = {
  get,
  latest,
  detail,
  create,
  list,
  assign,
  search,
  suggest,
};
