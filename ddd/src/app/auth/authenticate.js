const Token = require('src/domain/token');

/**
 * Authenticate user
 */
module.exports = ({ userRepository, webToken }) => {
  const authenticate = ({ body }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { email, password } = Token(body);
        const user = await userRepository.findByEmail(email);

        const validatePass = userRepository.validatePassword(user.password);

        if (!validatePass(password)) {
          throw new Error('Invalid Credentials');
        }
        const signIn = webToken.signin();

        resolve({
          token: signIn({
            id: user._id,
            email: user.email
          })
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    authenticate
  };
};
