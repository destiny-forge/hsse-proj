const container = require("src/container");
const {
  edit,
  register,
  reset,
  confirm,
  initEvents,
} = require("src/app/account");

module.exports = () => {
  const {
    repository: { userRepository },
    client_jwt,
    events,
    mailer,
    config,
  } = container.cradle;

  const editUseCase = edit({
    userRepository,
    events,
  });

  const registerUseCase = register({
    userRepository,
    events,
  });

  const resetUseCase = reset({
    config,
    userRepository,
    mailer,
    webToken: client_jwt,
    events,
  });

  const confirmUseCase = confirm({
    userRepository,
    webToken: client_jwt,
  });

  initEvents({
    config,
    events,
    webToken: client_jwt,
    mailer,
  });

  return {
    editUseCase,
    registerUseCase,
    resetUseCase,
    confirmUseCase,
  };
};
