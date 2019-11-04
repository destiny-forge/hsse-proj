const db = require('src/infra/mongodb');

module.exports = ({ logger, config }) => {
  if (!config.db) {
    /* eslint-disable no-console */
    logger.error('Database config file log not found, disabling database.');
    /* eslint-enable no-console */
    return false;
  }

  return db({ config });
};
