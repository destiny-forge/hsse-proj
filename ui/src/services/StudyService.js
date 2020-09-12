/*
 * Study service for interacting with the API backend
 */

const StudyService = ({ fetch }) => {
  const create = async (Study) => {
    const res = await fetch('/studies', {
      method: 'POST',
      body: JSON.stringify(Study),
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
    const res = await fetch('/studies', params);
    return Promise.resolve(res);
  };

  const get = async (shortId, userId) => {
    const res = await fetch(`/studies/${shortId}/${userId}`);
    return Promise.resolve(res);
  };

  return {
    create,
    list,
    get,
  };
};

export default StudyService;
