/**
 * Account verification
 */
module.exports = ({ userRepository, mailService, webToken }) => {
  const verify = async (userId, isVerified) => {
    try {
      return userRepository.update(userId, { isVerified: isVerified });
    } catch (error) {
      throw new Error(error);
    }
  };

  const send = async user => {
    const token = webToken.sign({ expiresIn: '48h' });
    const verifyToken = token({
      id: user._id,
      email: user.email
    });
    const confirmationUrl = `${config.backendServer}/confirmuser/${verifyToken}`;
    const subject = 'Confirm Registration Email';
    const html = `Please click this link to confirm your email: <a href="${confirmationUrl}">${confirmationUrl}</a>`;

    mailService.send({
      to: user.email,
      subject,
      html
    });
  };

  const isVerified = async userId => {
    try {
      const user = await userRepository.findById(userId);
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
