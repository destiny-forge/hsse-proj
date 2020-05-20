const container = require("src/container");
const { add, remove, update } = require("src/app/role");

module.exports = () => {
  const {
    repository: { userRepository },
    jwt,
  } = container.cradle;

  const addUseCase = add({
    userRepository,
    webToken: jwt,
  });

  const removeUseCase = remove({
    userRepository,
    webToken: jwt,
  });

  const updateUseCase = update({
    userRepository,
    webToken: jwt,
  });

  return {
    addUseCase,
    removeUseCase,
    updateUseCase,
  };
};
