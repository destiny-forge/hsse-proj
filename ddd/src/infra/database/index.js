const mongo = require("src/infra/mongodb");
const models = require("./models");

module.exports = ({ logger, config }) => {
  if (!config.db) {
    /* eslint-disable no-console */
    logger.error("Database config file log not found, disabling database.");
    /* eslint-enable no-console */
    return false;
  }
  mongo.init({ config: config.db, models });
  return mongo;
};
