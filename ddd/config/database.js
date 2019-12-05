const path = require("path");
const dotEnvPath = path.resolve(".env");

/**
 * since mocha doesn't see enviroment variables we have to use dotenv
 */
require("dotenv").config({ path: dotEnvPath });

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    name: "hsse",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  test: {
    url: process.env.DATABASE_URL_TEST,
    name: "hsse_test",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    logging: false
  },
  staging: {
    url: process.env.DATABASE_URL_STAGING,
    name: "hsse_staging",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: false
    }
  },
  production: {
    url: process.env.DATABASE_URL_PRODUCTION,
    name: "hsse_prod",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
};
