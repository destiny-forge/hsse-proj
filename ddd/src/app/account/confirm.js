/**
 * Account confirmation
 */
module.exports = ({ userRepository }) => {
  const confirm = (userId, isVerified) => {
    try {
      return userRepository.update(userId, { isVerified: isVerified });
    } catch (error) {
      throw new Error(error);
    }
  };

  const isConfirmed = userId => {
    try {
      const user = userRepository.findById(userId);
      return user.confirmed;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    isConfirmed,
    confirm
  };
};
