/**
 * Subscription related event handlers
 */
module.exports = ({ events, subscriptionRepository }) => {
  events.on("email.changed", (data) => {
    const { type, old_email, new_email } = data;
    subscriptionRepository.changeEmail(type, old_email, new_email);
  });
};
