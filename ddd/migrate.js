const container = require("src/container");
const migrate = require("src/migrate");
const app = container.resolve("app");

app
  .start(() => {
    const sites = ["hse", "sse"];
    sites.forEach((site) => {
      migrate.users(site);
      migrate.batches(site);
      migrate.articles(site);
    });
  })
  .catch((error) => {
    app.logger.error(error.stack);
    process.exit();
  });
