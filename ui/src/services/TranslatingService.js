/*
 * Presentation service for interacting with the API backend
 */

const TranslatingService = ({ fetch }) => {
  const list = async (type, language, priority) => {
    const params = {
      method: 'GET',
      data: {
        type,
        language,
        priority,
      },
    };
    const res = await fetch('/translating', params);
    return Promise.resolve(res);
  };

  return {
    list,
  };
};

export default TranslatingService;
