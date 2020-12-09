const container = require("src/container");
const { subscribe, unsubscribe, test, send } = require("src/app/subscription");

module.exports = () => {
  const {
    repository: { articleRepository, subscriptionRepository },
    mailer,
  } = container.cradle;

  const subscribeUseCase = subscribe({
    subscriptionRepository,
  });

  const unsubscribeUseCase = unsubscribe({
    subscriptionRepository,
  });

  const sendUseCase = send({
    subscriptionRepository,
    articleRepository,
    mailer,
  });

  return {
    subscribeUseCase,
    unsubscribeUseCase,
    sendUseCase,
  };
};
