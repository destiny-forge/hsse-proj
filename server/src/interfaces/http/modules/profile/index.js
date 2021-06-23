const container = require("src/container");
const router = require("./router");
const instance = require("./instance");

module.exports = () => {
  const {
    logger,
    response: { Success, Fail },
    client_auth,
    jwt,
  } = container.cradle;
  const app = instance();

  return {
    app,
    router: router({
      logger,
      auth: client_auth,
      jwt,
      response: { Success, Fail },
      ...app,
    }),
  };
};
