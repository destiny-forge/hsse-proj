/*
 * Appraisal service for interacting with the API backend
 */

const AppraisalService = ({ fetch }) => {
  const create = async (appraisal) => {
    const res = await fetch('/appraisals', {
      method: 'POST',
      body: JSON.stringify(appraisal),
    });
    return Promise.resolve(res);
  };

  const list = async (type, status) => {
    const params = {
      method: 'GET',
      data: {
        type,
        status,
      },
    };
    const res = await fetch('/appraisals', params);
    return Promise.resolve(res);
  };

  const get = async (shortId) => {
    const res = await fetch(`/appraisals/${shortId}`);
    return Promise.resolve(res);
  };

  return {
    create,
    list,
    get,
  };
};

export default AppraisalService;
