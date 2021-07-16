/**
 * Edit user / email subscriptions
 */
module.exports = ({ userRepository, subscriptionRepository }) => {
  const edit = async (_id, subscriptions) => {
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
      await subscriptionRepository.update(user.email, user.type, {
        subscriptions,
      });

      return subscriptions;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    edit,
  };
};
