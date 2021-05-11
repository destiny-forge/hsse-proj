const statusMonitor = require("express-status-monitor");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");

const { Router } = require("express");
const { partialRight } = require("ramda");

const controller = require("./utils/create_controller");
const httpLogger = require("./middlewares/http_logger");
const errorHandler = require("./middlewares/error_handler");

module.exports = ({ config, logger }) => {
  const router = Router();

  /* istanbul ignore if */
  if (config.env === "development") {
    router.use(statusMonitor());
  }

  /* istanbul ignore if */
  if (config.env !== "test") {
    router.use(httpLogger(logger));
  }

  const apiRouter = Router();

  apiRouter
    .use(
      cors({
        origin: [
          "http://localhost:3000",
          "http://localhost:3001",
          "http://socialsystemevidence.localhost:3000",
          "http://socialsystemevidence.localhost:3001",
          "http://healthsystemsevidence.localhost:3000",
          "http://healthsystemsevidence.localhost:3001",
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    )
    .use(bodyParser.json())
    .use(compression());

  /*
   * Add your API routes here
   *
   * You can use the `controllers` helper like this:
   * apiRouter.use('/users', controller(controllerPath))
   *
   * The `controllerPath` is relative to the `interfaces/http` folder
   */

  apiRouter.use("/", controller("index"));
  apiRouter.use("/auth", controller("auth").router);
  apiRouter.use("/account", controller("account").router);
  apiRouter.use("/users", controller("user").router);

  apiRouter.use("/articles", controller("article").router);
  apiRouter.use("/batches", controller("batch").router);
  apiRouter.use("/notes", controller("note").router);
  apiRouter.use("/eligibility", controller("eligibility").router);
  apiRouter.use("/appraisals", controller("appraisal").router);
  apiRouter.use("/studies", controller("study").router);
  apiRouter.use("/presentation", controller("presentation").router);
  apiRouter.use("/translating", controller("translating").router);
  apiRouter.use("/prioritizing", controller("prioritizing").router);

  apiRouter.use("/subscriptions", controller("subscription").router);
  apiRouter.use("/search", controller("search").router);

  apiRouter.use("/latest_content", controller("latest_content").router);

  router.use("", apiRouter);

  router.use(partialRight(errorHandler, [logger, config]));

  return router;
};
