const container = require('src/container');
const { register, reset, verify } = require('src/app/account');

module.exports = () => {
  const {
    repository: { userRepository },
    jwt,
    events
  } = container.cradle;

  const registerUseCase = register({
    userRepository,
    events
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
