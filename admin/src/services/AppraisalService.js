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

  const get = async (shortId, userId) => {
    const res = await fetch(`/appraisals/${shortId}/${userId}`);
    return Promise.resolve(res);
  };

  const listByBatch = async (batchId) => {
    const res = await fetch(`/appraisals/batch/${batchId}`);
    return Promise.resolve(res);
  };

  const compare = async (id) => {
    const res = await fetch(`/appraisals/compare/${id}`);
    return Promise.resolve(res);
  };

  const resolve = async (id) => {
    const res = await fetch(`/appraisals/resolve/${id}`, {
      method: 'POST',
    });
    return Promise.resolve(res);
  };

  return {
    create,
    list,
    get,
    listByBatch,
    compare,
    resolve,
  };
};

export default AppraisalService;
