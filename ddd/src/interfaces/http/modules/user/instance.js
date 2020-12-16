const container = require("src/container");
const { update, search } = require("src/app/user");

module.exports = () => {
  const {
    repository: { userRepository },
  } = container.cradle;

  const updateUseCase = update({ userRepository });
  const searchUseCase = search({ userRepository });

  return {
    updateUseCase,
    searchUseCase,
  };
};
