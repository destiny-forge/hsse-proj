const container = require("src/container");
const {
  get,
  subscribe,
  unsubscribe,
  test,
  send,
} = require("src/app/subscription");

module.exports = () => {
  const {
    repository: { articleRepository, subscriptionRepository },
    mailer,
  } = container.cradle;

  const getUseCase = get({
    subscriptionRepository,
  });

  const subscribeUseCase = subscribe({
    subscriptionRepository,
  });

  const unsubscribeUseCase = unsubscribe({
    subscriptionRepository,
  });

  const testUseCase = send({
    subscriptionRepository,
    articleRepository,
    mailer,
  });

  const sendUseCase = send({
    subscriptionRepository,
    articleRepository,
    mailer,
  });

  return {
    getUseCase,
    subscribeUseCase,
    unsubscribeUseCase,
    sendUseCase,
    testUseCase,
  };
};
