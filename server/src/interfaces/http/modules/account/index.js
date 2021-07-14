const container = require("src/container");
const router = require("./router");
const auth_router = require("./auth_router");
const instance = require("./instance");

module.exports = () => {
  const {
    logger,
    response: { Success, Fail },
    client_auth,
  } = container.cradle;
  const app = instance();

  return {
    app,
    router: router({ logger, response: { Success, Fail }, ...app }),
    auth_router: auth_router({
      logger,
      auth: client_auth,
      response: { Success, Fail },
      ...app,
    }),
  };
};
