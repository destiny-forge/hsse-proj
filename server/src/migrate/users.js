const mongodb = require("../infra/mongodb/standalone");

const extract = (site) => {
  return require(`./data/${site.toUpperCase()}_Users.json`);
};

const transform = (users) => {
  return users.map((user) => {
    let role = "user";
    switch (user.roles[0]) {
      case "Admin":
        role = "admin";
        break;
      case "User":
        role = "user";
        break;
      case "Office lead":
        role = "admin";
        break;
      case "Coder - advanced":
        role = "senior_filterer";
        break;
      case "Coder - trainee":
        role = "junior_filterer";
        break;
      case "Quality rater":
        role = "senior_appraiser";
        break;
      case "Information adder":
        role = "detailer";
        break;
      case "Title Translator":
        role = "translator";
        break;
      case "Site Translator":
        role = "admin";
        break;
      case "Translator Admin":
        role = "admin";
        break;
      case "Trusted User":
        role = "trusted_user";
        break;
      default:
        role = "user";
        break;
    }

    user.language = user.language.toLowerCase();

    user.roles = [role];
    return user;
  });
};

const load = (transforms) => {
  mongodb.bulkWrite("users", transforms);
};

module.exports = (site) => {
  const extracts = extract(site);
  const transforms = transform(extracts);
  const results = load(transforms);
  return results;
};
