const { createContainer, asValue, asFunction, asClass } = require("awilix");
// you can do this
const app = require("./app");
const server = require("./interfaces/http/server");
const router = require("./interfaces/http/router");
const auth = require("./interfaces/http/auth");
const client_auth = require("./interfaces/http/client_auth");
const config = require("../config");
const logger = require("./infra/logging/logger");
const database = require("./infra/database");
const { client, admin } = require("./infra/jwt");
const response = require("./infra/support/response");
const date = require("./infra/support/date");
const repository = require("./infra/repositories");
const events = require("./infra/events");
const mailer = require("./infra/mailer");
const search = require("./infra/search");
const container = createContainer();

// SYSTEM
container.register({
  app: asFunction(app).singleton(),
  events: asClass(events).singleton(),
  server: asFunction(server).singleton(),
  router: asFunction(router).singleton(),
  logger: asFunction(logger).singleton(),
  database: asFunction(database).singleton(),
  auth: asFunction(auth).singleton(),
  client_auth: asFunction(client_auth).singleton(),
  client_jwt: asFunction(client).singleton(),
  admin_jwt: asFunction(admin).singleton(),
  response: asFunction(response).singleton(),
  date: asFunction(date).singleton(),
  config: asValue(config),
  repository: asFunction(repository).singleton(),
  mailer: asClass(mailer).singleton(),
  search: asFunction(search).singleton(),
});

module.exports = container;
