/*
 * Eligibility service for interacting with the API backend
 */

const EligibilityService = ({ fetch }) => {
  const save = async eligibility => {
    const res = await fetch('/eligibility', {
      method: 'POST',
      body: JSON.stringify(eligibility)
    });
    return Promise.resolve(res);
  };

  return {
    save,
  };
};

export default EligibilityService;
