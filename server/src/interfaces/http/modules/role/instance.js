const container = require("src/container");
const { add, remove, update } = require("src/app/role");

module.exports = () => {
  const {
    repository: { userRepository },
    admin_jwt,
  } = container.cradle;

  const addUseCase = add({
    userRepository,
    webToken: admin_jwt,
  });

  const removeUseCase = remove({
    userRepository,
    webToken: admin_jwt,
  });

  const updateUseCase = update({
    userRepository,
    webToken: admin_jwt,
  });

  return {
    addUseCase,
    removeUseCase,
    updateUseCase,
  };
};
