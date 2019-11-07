const { MongoClient } = require('mongodb');

const mongo = {
  config: null,
  client: null,
  db: null,
  models: {}
};

const init = ({ config, models }) =>
  new Promise((resolve, reject) => {
    try {
      mongo.config = config;
      mongo.client = new MongoClient(config.url, config.options);
      mongo.models = models;
      resolve(mongo);
    } catch (err) {
      reject('The mongodb client could not be initialized');
    }
  });

const connect = () =>
  new Promise((resolve, reject) => {
    const { client, config } = mongo;
    if (client === null) {
      return reject('The mongodb client has not been initialized');
    }
    client.connect(err => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      mongo.db = config.name != null ? client.db(config.name) : client.db();
      resolve(mongo.db);
    });
  });

const close = () =>
  new Promise((resolve, reject) => {
    if (mongo.client === null) {
      return reject('The mongodb connection is already closed!');
    }
    try {
      mongo.client.close();
      mongo.client = null;
      mongo.models = {};
      resolve(mongo);
    } catch (err) {
      reject(err);
    }
  });

module.exports = {
  mongo,
  init,
  connect,
  close
};
