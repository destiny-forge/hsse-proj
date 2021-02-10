const container = require("src/container");
const migrate = require("src/migrate");
const app = container.resolve("app");

app
  .start()
  .then(() => {
    const sites = ["hse", "sse"];
    sites.forEach((site) => {
      //app.logger.log(`importing legacy data for site = ${site}`);
      //migrate.users(site);
      migrate.batches(site);
      migrate.articles(site);
    });
  })
  .catch((error) => {
    console.log(error);
    //app.logger.error(error.stack);
    process.exit();
  });
