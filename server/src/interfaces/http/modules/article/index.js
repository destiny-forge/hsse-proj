const container = require("src/container");
const admin_router = require("./admin_router");
const router = require("./router");
const instance = require("./instance");

module.exports = () => {
  const {
    logger,
    response: { Success, Fail },
    auth,
  } = container.cradle;
  const app = instance();

  return {
    app,
    admin_router: router({ logger, auth, response: { Success, Fail }, ...app }),
    router: router({ logger, response: { Success, Fail }, ...app }),
  };
};
