/*
 * Batch service for interacting with the API backend
 */

const BatchService = ({ fetch }) => {
  const create = async (batch) => {
    const res = await fetch('/batches', {
      method: 'POST',
      body: JSON.stringify(batch),
    });
    return Promise.resolve(res);
  };

  const signedUrl = async ({ type, contentType }) => {
    const res = await fetch('/batches/signed-url', {
      method: 'POST',
      body: JSON.stringify({ type, contentType }),
    });
    return Promise.resolve(res);
  };

  const list = async (type, stage, status) => {
    const params = {
      method: 'GET',
      data: {
        type,
        status,
      },
    };

    const res = await fetch(`/${stage}`, params);
    return Promise.resolve(res);
  };

  const prioritize = async (assignment) => {
    const res = await fetch('/batches/prioritize', {
      method: 'POST',
      body: JSON.stringify(assignment),
    });
    return Promise.resolve(res);
  };

  return {
    signedUrl,
    create,
    list,
    prioritize,
  };
};

export default BatchService;
