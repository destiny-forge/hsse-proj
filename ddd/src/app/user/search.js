/**
 * User search by email or role
 */

module.exports = ({ userRepository }) => {
  const search = async (email, role) => {
    try {
      return await userRepository.search(email, role);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    search,
  };
};
