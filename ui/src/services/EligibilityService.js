/*
 * Eligibility service for interacting with the API backend
 */

const EligibilityService = ({ fetch }) => {
  const create = async eligibility => {
    const res = await fetch('/eligibility', {
      method: 'POST',
      body: JSON.stringify(eligibility)
    });
    return Promise.resolve(res);
  };

  const get = async (shortId, userId) => {
    const params = {
      method: 'GET',
      data: {
        userId,
      }
    };
    
    const res = await fetch(`/eligibility/${shortId}`, params)
    return Promise.resolve(res);
  };


  return {
    create,
    get
  };
};

export default EligibilityService;
