const container = require("src/container");
const { load } = require("src/app/user");

module.exports = (site) => {
  const {
    repository: { userRespository },
  } = container.cradle;

  const loadUseCase = load({ userRespository });

  const users = require(`${site.toUpperCase()}_Users.json`);
  const result = users.map((user) => loadUseCase(user));
  console.log(result);
  return result;
};
