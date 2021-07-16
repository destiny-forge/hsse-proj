const container = require("src/container");
const {
  get,
  edit,
  toggle,
  subscribe,
  unsubscribe,
  test,
  send,
  initEvents,
} = require("src/app/subscription");

module.exports = () => {
  const {
    repository: { articleRepository, subscriptionRepository, userRepository },
    search,
    mailer,
    events,
  } = container.cradle;

  initEvents({
    subscriptionRepository,
    events,
  });

  const getUseCase = get({
    userRepository,
    subscriptionRepository,
  });

  const editUseCase = edit({
    userRepository,
    subscriptionRepository,
  });

  const toggleUseCase = toggle({
    userRepository,
    subscriptionRepository,
  });

  const subscribeUseCase = subscribe({
    subscriptionRepository,
  });

  const unsubscribeUseCase = unsubscribe({
    subscriptionRepository,
  });

  const testUseCase = test({
    searchClient: search,
    subscriptionRepository,
    articleRepository,
    mailer,
  });

  const sendUseCase = send({
    searchClient: search,
    subscriptionRepository,
    articleRepository,
    mailer,
  });

  return {
    getUseCase,
    editUseCase,
    toggleUseCase,
    subscribeUseCase,
    unsubscribeUseCase,
    sendUseCase,
    testUseCase,
  };
};
