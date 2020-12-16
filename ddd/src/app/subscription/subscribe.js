/**
 * Email subscribe
 */
module.exports = ({ subscriptionRepository }) => {
  const subscribe = async (email, type, filters) => {
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

    if (!filters) {
      return {
        error: "A valid filter list is required",
      };
    }

    try {
      const subscriber = await subscriptionRepository.findOne({
        email: { $eq: email },
        type: { $eq: type },
      });

      if (subscriber) {
        return {
          error: "Email is already subscribed",
        };
      }

      return await subscriptionRepository.subscribe(email, type, filters);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    subscribe,
  };
};
