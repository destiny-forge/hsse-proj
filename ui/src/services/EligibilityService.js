/*
 * Eligibility service for interacting with the API backend
 */

const EligibilityService = ({ fetch }) => {
  const create = async (eligibility) => {
    const res = await fetch('/eligibility', {
      method: 'POST',
      body: JSON.stringify(eligibility),
    });
    return Promise.resolve(res);
  };

  const get = async (shortId, userId) => {
    const res = await fetch(`/eligibility/${shortId}/${userId}`);
    return Promise.resolve(res);
  };

  const compare = async (id) => {
    const res = await fetch(`/eligibility/compare/${id}`);
    return Promise.resolve(res);
  };

  const resolve = async (id) => {
    const res = await fetch(`/eligibility/resolve/${id}`, {
      method: 'POST',
    });
    return Promise.resolve(res);
  };

  return {
    get,
    create,
    compare,
    resolve,
  };
};

export default EligibilityService;
