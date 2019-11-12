const container = require('src/container');
const { register, reset, verify, initEvents } = require('src/app/account');

module.exports = () => {
  const {
    repository: { userRepository },
    jwt,
    events,
    config
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

  initEvents({
    config,
    events,
    webToken: jwt,
    mailService: {
      send: args => {
        // replace with a real service :)
        console.log(args);
      }
    }
  });

  return {
    registerUseCase,
    resetUseCase,
    verifyUseCase
  };
};
