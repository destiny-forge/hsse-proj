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

  const create = async (articleId, language, text, approved) => {
    const res = await fetch('/translating', {
      method: 'POST',
      body: JSON.stringify({ articleId, language, text, approved }),
    });
    return Promise.resolve(res);
  };

  return {
    create,
    list,
  };
};

export default TranslatingService;
