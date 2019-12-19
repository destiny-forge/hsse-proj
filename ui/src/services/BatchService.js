/*
 * Batch service for interacting with the API backend
 */

const BatchService = ({ fetch }) => {

  const create = async batch => {
    const res = await fetch('/batches', {
      method: 'POST',
      body: JSON.stringify(batch)
    });
    return Promise.resolve(res);
  };

  const signedUrl = async type => {
    const res = await fetch('/batches/signed-url', {
      method: 'POST',
      body: {
        type: 'sse'
      }
    });
    return Promise.resolve(res);
  };

  return {
    signedUrl,
    create
  };
};

export default BatchService;
