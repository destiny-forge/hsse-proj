/*
 * Search service for interacting with the API backend
 */

const SearchService = () => {
  const is_localhost = window.location.origin.indexOf('localhost') > 0;
  const baseURL = is_localhost ? 'http://localhost:5001' : '/api';

  const latest = async (site, language) => {
    const url = `${baseURL}/latest_content?type=${site}&lang=${language}`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  };

  const suggestions = async (query, type, lang) => {
    const url = `${baseURL}/search/suggestions?q=${query}&type=${type}&lang=${lang}`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  };

  const search = async ({ query, filters, sort, page, site, language }) => {
    const url = `${baseURL}/search?q=${query}&applied_filters=${filters}&sort_by=${sort}&page=${page}&site=${site}&lang=${language}`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  };

  return {
    latest,
    search,
    suggestions,
  };
};

export default SearchService;
