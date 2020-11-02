/*
 * Prioritization service for interacting with the backend REST APId
 */

const PrioritizationService = ({ fetch }) => {
  const assign = async (batchId) => {
    const res = await fetch('/prioritizing', {
      method: 'POST',
      body: JSON.stringify({ batchId, priority: 'high' }),
    });
    return Promise.resolve(res);
  };

  const remove = async (batchId) => {
    const res = await fetch('/prioritizing', {
      method: 'POST',
      body: JSON.stringify({ batchId, priority: 'low' }),
    });
    return Promise.resolve(res);
  };

  return {
    assign,
    remove,
  };
};

export default PrioritizationService;
