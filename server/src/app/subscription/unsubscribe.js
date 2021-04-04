/**
 * Email unsubscribe
 */
module.exports = ({ subscriptionRepository }) => {
  const unsubscribe = async (email, type) => {
    if (!email) {
      return {
        error: "A valid email is required",
      };
    }

    if (!type) {
      return {
        error: "A valid type is required",
      };
    }

    try {
      const subscriber = await subscriptionRepository.findOne({
        email: { $eq: email },
        type: { $eq: type },
      });

      if (!subscriber) {
        return {
          error: "Email is not subscribed for this site",
        };
      }

      return await subscriptionRepository.unsubscribe(email, type);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    unsubscribe,
  };
};
