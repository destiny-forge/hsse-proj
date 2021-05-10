const mongodb = require("../infra/mongodb/standalone");

const extract = (site) => {
  return require(`./data/${site.toUpperCase()}_Users.json`);
};

const transform = (type, users) => {
  return users.map((user) => {
    return {
      type,
      legacyId: user.legacyId,
      email: user.email,
      subscriptions: user.subscriptions,
    };
  });
};

const load = (transforms) => {
  mongodb.bulkWrite("subscriptions", transforms);
};

module.exports = (type) => {
  const extracts = extract(type);
  const transforms = transform(type, extracts);
  const results = load(transforms);
  return results;
};
