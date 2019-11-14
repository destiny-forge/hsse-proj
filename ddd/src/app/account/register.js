/**
 * Account registration
 */
module.exports = ({ userRepository, events }) => {
  const register = async (email, password) => {
    try {
      let user = await userRepository.findByEmail(email);
      if (user) {
        throw new Error('email has already been taken');
      }

      user = stubUser({ email, password });
      user = await userRepository.create(user);

      const data = {
        id: user._id,
        email: user.email
      };

      events.emit('account.registered', data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    register
  };
};

const stubUser = ({ email, password }) => {
  const now = new Date();
  return {
    email,
    // note: password length and complexity should also be managed
    password,
    confirmed: false,
    // @todo - Lock down the roles!
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
};
