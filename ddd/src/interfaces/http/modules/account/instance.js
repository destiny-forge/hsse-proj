const container = require('src/container');
const { register, reset, confirm, initEvents } = require('src/app/account');

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
    events
  });

  const confirmUseCase = confirm({
    userRepository,
    webToken: jwt
  });

  initEvents({
    config,
    events,
    webToken: jwt,
    mailer: {
      send: args => {
        // replace with a real service :)
        console.log(args);
      }
    }
  });

  return {
    registerUseCase,
    resetUseCase,
    confirmUseCase
  };
};
