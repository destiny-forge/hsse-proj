const container = require('src/container');
const { add, remove, update } = require('src/app/role');

module.exports = () => {
  const {
    repository: { userRepository },
    jwt
  } = container.cradle;

  const addUseCase = register({
    userRepository,
    webToken: jwt
  });

  const removeUseCase = reset({
    userRepository,
    webToken: jwt
  });

  const updateUseCase = verify({
    userRepository,
    webToken: jwt
  });

  return {
    addUseCase,
    removeUseCase,
    updateUseCase
  };
};
