const container = require('src/container');
const { authenticate } = require('src/app/auth');

module.exports = () => {
  const {
    repository: { userRepository },
    jwt
  } = container.cradle;

  const authenticateUseCase = authenticate({
    userRepository,
    webToken: jwt
  });

  return {
    authenticateUseCase
  };
};
