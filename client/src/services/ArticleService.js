/*
 * Article service for interacting with the API backend
 */

const ArticleService = () => {
  const is_localhost = window.location.origin.indexOf('localhost') > 0;
  const baseURL = is_localhost ? 'http://localhost:5001' : '/api';

  const get = async (id, type, language) => {
    const url = `${baseURL}/articles/${id}?lang=${language}&type=${type}`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  };

  return {
    get,
  };
};

export default ArticleService;
