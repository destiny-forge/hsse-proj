/**
 * Account reset password
 */
module.exports = ({ userRepository, events }) => {
  const reset = async email => {
    try {
      const user = await userRepository.findByEmail(email);
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
