/*
 * Prioritization service for interacting with the backend REST APId
 */

const PrioritizationService = ({ fetch }) => {
  const assign = async (batchId) => {
    const d = new Date();
    const monthlyUpdateDate = `${d.getFullYear()}-${d.getMonth() + 1}`;
    const res = await fetch('/prioritizing/assign', {
      method: 'POST',
      body: JSON.stringify({ batchId, monthlyUpdateDate }),
    });
    return Promise.resolve(res);
  };

  const list = async (type) => {
    const res = await fetch('/prioritizing', {
      method: 'GET',
      data: {
        type,
      },
    });
    return Promise.resolve(res);
  };

  const makeLive = async (batchId) => {
    const res = await fetch('/prioritizing/make-live', {
      method: 'POST',
      body: JSON.stringify({ batchId }),
    });
    return Promise.resolve(res);
  };

  const goLive = async () => {
    const d = new Date();
    const monthlyUpdateDate = `${d.getFullYear()}-${d.getMonth() + 1}`;
    const res = await fetch('/prioritizing/go-live', {
      method: 'POST',
      body: JSON.stringify({ monthlyUpdateDate }),
    });
    return Promise.resolve(res);
  };

  return {
    assign,
    list,
    makeLive,
    goLive,
  };
};

export default PrioritizationService;
