/*
 * Article service for interacting with the API backend
 */

const ArticleService = ({ fetch }) => {
  const create = async article => {
    const res = await fetch('/articles', {
      method: 'POST',
      body: JSON.stringify(article)
    });
    return Promise.resolve(res);
  };

  const list = async type => {
    const params = {
      method: 'GET',
      data: {
        type: type 
      }
    };
    const res = await fetch('/articles', params)
    return Promise.resolve(res);
  };

  const eligibilityFilters = async () => {
    const res = await fetch('/eligibility-filters')
    return Promise.resolve(res);
  };

  return {
    create,
    list,
    eligibilityFilters
  };
};

export default ArticleService;
