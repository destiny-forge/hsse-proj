/**
 * Get user profile
 */
module.exports = ({ userRepository }) => {
  const get = async (id) => {
    if (!id) {
      return {
        error: "A valid user id is required",
      };
    }

    try {
      const user = await userRepository.findById(id);

      if (!user) {
        return {
          error: "User profile does not exist",
        };
      }

      return user;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    get,
  };
};
