/**
 * Togle user / email subscribed
 */
module.exports = ({ userRepository, subscriptionRepository }) => {
  const toggle = async (_id, query, subscribed) => {
    if (!_id) {
      return {
        error: "A valid user id is required",
      };
    }

    const user = await userRepository.findById(_id);
    if (user === null) {
      return {
        error: "User not found",
      };
    }

    try {
      return await subscriptionRepository.toggle(
        user.email,
        user.type,
        query,
        subscribed
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    toggle,
  };
};
