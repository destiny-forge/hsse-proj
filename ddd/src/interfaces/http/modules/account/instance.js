const container = require('src/container');
const { register, reset, verify } = require('src/app/account');

module.exports = () => {
  const {
    repository: { userRepository },
    jwt,
    config
  } = container.cradle;

  const registerUseCase = register({
    config,
    userRepository,
    webToken: jwt
  });

  const resetUseCase = reset({
    userRepository,
    webToken: jwt
  });

  const verifyUseCase = verify({
    userRepository,
    webToken: jwt
  });

  return {
    registerUseCase,
    resetUseCase,
    verifyUseCase
  };
};
