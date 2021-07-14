const Auth = require("src/domain/auth");

/**
 * Authenticate client user
 */
module.exports = ({ userRepository, webToken }) => {
  const authenticate = async (type, email, password) => {
    try {
      const auth = Auth({ type, email, password });
      const user = await userRepository.findByEmail(type, auth.email);

      if (!user) {
        return { error: "user not found" };
      }

      const validatePass = userRepository.validatePassword(user.password);

      if (!validatePass(password)) {
        return { error: "invalid credentials" };
      }
      const signIn = webToken.signin();

      return {
        token: signIn({
          id: user._id,
          type: user.type,
          language: user.language,
        }),
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    authenticate,
  };
};
