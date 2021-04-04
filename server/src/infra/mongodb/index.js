const { MongoClient } = require("mongodb");

const mongo = {
  config: null,
  client: null,
  db: null,
  models: {},
};

const init = ({ config, models }) =>
  new Promise((resolve, reject) => {
    try {
      mongo.config = config;
      const uri = `${config.url}/${config.name}`;
      mongo.client = new MongoClient(uri, config.options);
      mongo.models = models;
      resolve(mongo);
    } catch (err) {
      reject("The mongodb client could not be initialized");
    }
  });

const connect = () =>
  new Promise((resolve, reject) => {
    // console.log('connecting to the database');
    const { client, config } = mongo;
    if (client === null) {
      return reject("The mongodb client has not been initialized");
    }
    client.connect((err) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      mongo.db = config.name != null ? client.db(config.name) : client.db();
      resolve(mongo.db);
    });
  });

const configure = () => {
  return new Promise((resolve, reject) => {
    const { models, db, client } = mongo;
    if (client === null) {
      return reject("The mongodb client has not been initialized");
    }
    if (db === null) {
      return reject("The mongodb client has not been connected");
    }
    try {
      // loop through models and setIndexes
      Object.keys(models).forEach((key) => {
        const Model = models[key]({ database: { get } });
        if (Model.hasOwnProperty("createIndexes")) {
          Model.createIndexes();
        }
        if (Model.hasOwnProperty("migrate")) {
          Model.migrate();
        }
      });
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
};

const close = () =>
  new Promise((resolve, reject) => {
    if (mongo.client === null) {
      return reject("The mongodb connection is already closed!");
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

const get = () => {
  return mongo.db;
};

module.exports = {
  mongo,
  get,
  init,
  connect,
  configure,
  close,
};
