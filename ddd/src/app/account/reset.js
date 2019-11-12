/**
 * Account reset password
 */
module.exports = ({ userRepository, webToken, mailer }) => {
  const reset = email => {
    try {
      const user = userRepository.getByEmail(email);
      if (!user) {
        throw new Error('User not found');
      }

      const createToken = webToken.sign({ expiresIn: '48h' });

      const token = createToken({
        id: user._id,
        email: user.email
      });

      const resetUrl = `${config.frontendServer}/resetpassword/${token}`;
      const subject = 'Reset Password Email';
      const html = `Please click this to reset your password: <a href="${resetUrl}">${resetUrl}</a>`;

      const sentStatus = mailer.send({
        to: user.email,
        subject,
        html
      });

      return sentStatus;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    reset
  };
};
