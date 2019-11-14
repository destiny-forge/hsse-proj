/**
 * Account reset password
 */
module.exports = ({ userRepository, events }) => {
  const reset = email => {
    try {
      const user = userRepository.getByEmail(email);
      if (!user) {
        throw new Error('User not found');
      }

      const data = {
        id: user.id,
        email: user.email
      };
      events.emit('account.reset', data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    reset
  };
};
