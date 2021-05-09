/*
 * Search service for interacting with the API backend
 */

const SearchService = () => {
  const is_localhost = window.location.origin.indexOf('localhost') > 0;
  const baseURL = is_localhost ? 'http://localhost:5001' : '/api';

  const latest = async (site, language) => {
    const url = `${baseURL}/latest_content?site=${site}&lang=${language}`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  };

  const suggestions = async (query, lang) => {
    const url = `${baseURL}/search/suggestions/q=${query}&lang=${lang}`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  };

  return {
    latest,
    suggestions,
  };
};

export default SearchService;
