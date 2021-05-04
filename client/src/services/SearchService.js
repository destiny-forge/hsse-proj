/*
 * Search service for interacting with the API backend
 */

const SearchService = () => {
  const is_localhost = window.location.origin.indexOf('localhost') > 0;
  const baseURL = is_localhost ? 'http://localhost:5001' : '/api';

  const latest = async () => {
    const res = await fetch(`${baseURL}/search/latest`);
    return Promise.resolve(res);
  };

  const suggestions = async (query, lang) => {
    const url = `${baseURL}/search/suggestions/q=${query}&lang=${lang}`;
    const res = await fetch(url);
    return Promise.resolve(res);
  };

  return {
    latest,
    suggestions,
  };
};

export default SearchService;
