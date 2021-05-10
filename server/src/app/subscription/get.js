/**
 * Get email subscription
 */
module.exports = ({ subscriptionRepository }) => {
  const get = async (email, type) => {
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
          error: "No subscription currently exists for email and type",
        };
      }

      return subscriber;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    get,
  };
};
