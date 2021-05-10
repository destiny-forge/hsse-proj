/*
 * Subscription service for interacting with the API backend
 */

const SubscriptionService = ({ fetch }) => {
  const getYearMonth = () => {
    const date = new Date();
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`;
  };
  const test = async (type, recipients) => {
    const data = {
      type,
      date: getYearMonth(),
      recipients,
    };
    const res = await fetch('/subscriptions/test', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return Promise.resolve(res);
  };

  const send = async (type) => {
    const data = {
      type,
      date: getYearMonth(),
    };
    const res = await fetch('/subscriptions/send', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return Promise.resolve(res);
  };

  const resend = async (type, date) => {
    const data = {
      type,
      date,
    };
    const res = await fetch('/subscriptions/send', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return Promise.resolve(res);
  };

  return {
    test,
    send,
    resend,
  };
};

export default SubscriptionService;
