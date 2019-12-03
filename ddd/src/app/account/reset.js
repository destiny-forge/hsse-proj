const emailer = require("./email");

/**
 * Account reset password
 */
module.exports = ({ config, userRepository, webToken, mailer, events }) => {
  const send = async email => {
    try {
      const user = await userRepository.findByEmail(email);
      if (!user) {
        return {
          error: "User not found"
        };
      }

      const data = {
        id: user.id,
        email: user.email
      };

      const resetEmail = emailer.reset({ config, webToken, mailer });

      resetEmail.send(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const reset = async (token, password) => {
    try {
      const verifyToken = webToken.verify();
      const { email } = verifyToken(token);

      const user = await userRepository.findByEmail(email);

      const result = await userRepository.update(user._id, {
        password: userRepository.encryptPassword(password)
      });

      if (!result.ok) {
        throw new Error("User password could not be set");
      }

      const data = {
        id: user.id,
        email: user.email
      };

      events.emit("account.reset", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    send,
    reset
  };
};
