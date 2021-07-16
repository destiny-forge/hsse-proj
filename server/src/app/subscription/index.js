const get = require("./get");
const edit = require("./edit");
const toggle = require("./toggle");
const subscribe = require("./subscribe");
const unsubscribe = require("./unsubscribe");
const test = require("./test");
const send = require("./send");
const initEvents = require("./events");

module.exports = {
  get,
  edit,
  toggle,
  subscribe,
  unsubscribe,
  test,
  send,
  initEvents,
};
