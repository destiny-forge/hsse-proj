const mongodb = require("../infra/mongodb/standalone");

const extract = async (site) => {
  const query = {
    type: site,
    live: true,
  };
  return await mongodb.distinct("articles", "monthlyUpdateDate", query);
};

const transform = async (type, updates) => {
  return updates.map((update) => {
    let date = new Date(Date.parse(`${update}-01 00:00:00`));
    return {
      date,
      type,
      live: true,
    };
  });
};

const load = async (transforms) => {
  mongodb.bulkWrite("updates", transforms);
};

module.exports = async (site) => {
  let updates = await extract(site);
  let transforms = await transform(site, updates);
  await load(transforms);
};
