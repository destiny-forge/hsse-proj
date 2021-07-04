const container = require("src/container");
const { client, admin } = require("src/app/auth");

module.exports = () => {
  const {
    repository: { userRepository },
    client_jwt,
    admin_jwt,
  } = container.cradle;

  const adminAuthUseCase = admin({
    userRepository,
    webToken: admin_jwt,
  });
  const clientAuthUseCase = client({
    userRepository,
    webToken: client_jwt,
  });

  return {
    adminAuthUseCase,
    clientAuthUseCase,
  };
};
