const shortid = require("shortid");
const db = require("./db");

// load the extracts from disk
const extract = (site) => {
  return require(`./data/${site.toUpperCase()}_Users.json`);
};

// clean up data and add shortId
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
        role = "";
        break;
      case "Coder - advanced":
        role = "";
        break;
      case "Coder - trainee":
        role = "";
        break;
      default:
        role = "user";
        break;
    }

    user.roles = [role];
    user.legacyId = user.legacy_id;
    delete user.legacy_id;
    return user;
  });
};

const load = (transforms) => {
  db.bulkWrite("users", transforms);
};

module.exports = (site) => {
  const extracts = extract(site);
  const transforms = transform(extracts);
  const results = load(transforms);
  return results;
};
