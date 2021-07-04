const container = require("src/container");
const { edit, get } = require("src/app/profile");

module.exports = () => {
  const {
    repository: { userRepository, subscriptionRepository },
  } = container.cradle;

  const getUseCase = edit({
    userRepository,
    subscriptionRepository,
  });

  const editUseCase = edit({
    userRepository,
  });

  return {
    getUseCase,
    editUseCase,
  };
};
