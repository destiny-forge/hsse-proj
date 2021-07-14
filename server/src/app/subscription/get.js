/**
 * Get email subscription
 */
module.exports = ({ userRepository, subscriptionRepository }) => {
  const get = async (_id) => {
    if (!_id) {
      return {
        error: "A valid id is required",
      };
    }

    const user = await userRepository.findById(_id);
    if (user === null) {
      return {
        error: "User not found",
      };
    }

    try {
      const subscriber = await subscriptionRepository.findOne(
        user.email,
        user.type
      );

      if (!subscriber) {
        return [];
      }

      return subscriber.subscriptions;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    get,
  };
};
