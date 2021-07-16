import API from './API';
/*
 * Profile service for interacting with the API backend
 */

const SubscriptionService = () => {
  const get = async () => {
    const id = localStorage.getItem('client_token');
    if (!id) {
      return null;
    }
    return await API.call(`/subscriptions`);
  };

  const edit = async (subscriptions) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify({
        subscriptions,
      }),
    };

    try {
      const response = await API.call('/subscriptions', opts);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  const toggle = async (query, subscribed) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify({
        query,
        subscribed,
      }),
    };

    try {
      const response = await API.call('/subscriptions/toggle', opts);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  const subscribe = async (type, { query, filters }) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify({
        type,
        query,
        filters,
      }),
    };

    try {
      const response = await API.call('/subscriptions/subscribe', opts);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  const unsubscribe = async (type, query) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify({
        type,
        query,
      }),
    };

    try {
      const response = await API.call('/subscriptions/unsubscribe', opts);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  return {
    get,
    edit,
    toggle,
    subscribe,
    unsubscribe,
  };
};

export default SubscriptionService;
