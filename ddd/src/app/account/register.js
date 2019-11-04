/**
 * Account registration
 */
module.exports = ({ userRepository, webToken }) => {
  const register = async (email, password) => {
    try {
      // we should use the user service here instead
      // of going to the user repository inside the
      // account registration service!!!!
      const user = userRepository.getByEmail(email);

      /* Only register if the user doesn't already exist */

      // sending emails is a concern that really shouldn't
      // live here - so we should emit an event and include
      // live events as part of the listeners so that we can
      // reduce the coupling between systems and make this more
      // extensible in the future
      const token = webToken.sign({ expiresIn: '48h' });

      const emailToken = token({
        id: user._id,
        email: user.email
      });

      const confirmationUrl = `${config.backendServer}/confirmuser/${emailToken}`;
      const subject = 'Confirm Registration Email';
      const html = `Please click this email to confirm your email: <a href="${confirmationUrl}">${confirmationUrl}</a>`;

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
    register
  };
};
