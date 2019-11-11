/**
 * Account registration
 */
module.exports = ({ config, userRepository, webToken }) => {
  const register = async (email, password) => {
    try {
      // we should use the user service here instead
      // of going to the user repository inside the
      // account registration service!!!!
      let existingUser = await userRepository.findByEmail(email);

      if (existingUser) {
        throw new Error('email has already been taken');
      }

      // note: password length and complexity should also be managed
      // @todo - Lock down the roles!
      const now = Date.now();

      const userObj = {
        email,
        password,
        roles: [
          'user',
          'uploader',
          'detailer',
          'linker',
          'juniorappraiser',
          'seniorappraiser',
          'juniorfilterer',
          'seniorfilterer',
          'prioritizer',
          'administrator'
        ],
        createdAt: now,
        updatedAt: now
      };

      const newUser = userRepository.create(userObj);

      // emit user registered event = decoupled
      // which will be listened to by the mail service
      // and will use the infra email service to send
      // the emails out in a non blocking fashion

      console.log(newUser);

      /* Only register if the user doesn't already exist */

      // sending emails is a concern that really shouldn't
      // live here - so we should emit an event and include
      // live events as part of the listeners so that we can
      // reduce the coupling between systems and make this more
      // extensible in the future
      const token = webToken.sign({ expiresIn: '48h' });

      const emailToken = token({
        id: newUser._id,
        email: newUser.email
      });

      const confirmationUrl = `${config.backendServer}/confirmuser/${emailToken}`;
      const subject = 'Confirm Registration Email';
      const html = `Please click this email to confirm your email: <a href="${confirmationUrl}">${confirmationUrl}</a>`;

      const sentStatus = mailService.send({
        to: newUser.email,
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
