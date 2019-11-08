/**
 * Account reset password
 */
module.exports = ({ userRepository, webToken, mailService }) => {
  const reset = email => {
    try {
      const user = userRepository.getByEmail(email);
      const token = webToken.sign({ expiresIn: '48h' });
      const emailToken = token({
        id: user._id,
        email: user.email
      });
      const resetUrl = `${config.frontendServer}/resetpassword/${emailToken}`;
      const subject = 'Reset Password Email';
      const html = `Please click this to reset your password: <a href="${resetUrl}">${resetUrl}</a>`;

      const sentStatus = mailService.send({
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
