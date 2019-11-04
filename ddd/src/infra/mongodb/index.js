const Mongo = require('mongodb').MongoClient;

module.exports = ({ config }) => {
  return new Promise(function(resolve, reject) {
    Mongo.connect(config.db.url, { ...config.db.options }, (err, client) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(client);
    });
  });
};
