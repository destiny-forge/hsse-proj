/*
 * Appraisal service for interacting with the API backend
 */

const AppraisalService = ({ fetch }) => {
  const list = async (type, status) => {
    const params = {
      method: 'GET',
      data: {
        type,
        status,
      }
    };

    const res = await fetch('/appraisal', params)
    return Promise.resolve(res);
  };

  const get = async (shortId) => {
    const res = await fetch(`/appraisal/${shortId}`)
    return Promise.resolve(res);
  };

  const assign = async assignment => {
    const res = await fetch('/appraisal/assign', {
      method: 'POST',
      body: JSON.stringify(assignment)
    });
    return Promise.resolve(res);
  };

  return {
    list,
    get,
    assign,
  };
};

export default AppraisalService;
