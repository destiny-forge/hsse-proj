/**
 * Account verification
 */
module.exports = ({ userRepository, mailer, webToken }) => {
  const verify = (userId, isVerified) => {
    try {
      return userRepository.update(userId, { isVerified: isVerified });
    } catch (error) {
      throw new Error(error);
    }
  };

  const send = user => {
    const token = webToken.sign({ expiresIn: '48h' });
    const verifyToken = token({
      id: user._id,
      email: user.email
    });
    const confirmationUrl = `${config.backendServer}/confirmuser/${verifyToken}`;
    const subject = 'Confirm Registration Email';
    const html = `Please click this link to confirm your email: <a href="${confirmationUrl}">${confirmationUrl}</a>`;

    mailer.send({
      to: user.email,
      subject,
      html
    });
  };

  const isVerified = userId => {
    try {
      const user = userRepository.findById(userId);
      return user.isVerified;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    isVerified,
    verify,
    send
  };
};
