const migrate = require("./src/migrate");

const execute = () => {
  const sites = ["hse"];
  sites.forEach((site) => {
    //app.logger.log(`importing legacy data for site = ${site}`);
    //migrate.users(site);
    //migrate.batches(site);
    migrate.articles(site);
  });
};

execute();
