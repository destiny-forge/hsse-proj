const container = require("src/container");
const { register, reset, confirm, initEvents } = require("src/app/account");

module.exports = () => {
  const {
    repository: { userRepository },
    jwt,
    events,
    mailer,
    config
  } = container.cradle;

  const registerUseCase = register({
    userRepository,
    events
  });

  const resetUseCase = reset({
    config,
    userRepository,
    mailer,
    webToken: jwt,
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
    mailer
  });

  return {
    registerUseCase,
    resetUseCase,
    confirmUseCase
  };
};
