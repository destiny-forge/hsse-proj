const Auth = require("src/domain/auth");

/**
 * Authenticate user
 */
module.exports = ({ userRepository, webToken }) => {
  const authenticate = async (email, password) => {
    try {
      const auth = Auth({ email, password });
      const user = await userRepository.findByEmail(auth.email);

      const validatePass = userRepository.validatePassword(user.password);

      if (!validatePass(password)) {
        throw new Error("Invalid Credentials");
      }
      const signIn = webToken.signin();

      return {
        token: signIn({
          id: user._id,
          email: user.email
        })
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    authenticate
  };
};
