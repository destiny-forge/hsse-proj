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

  const eligibilityFilters = async () => {
    const res = await fetch('/eligibility-filters')
    return Promise.resolve(res);
  };

  const get = async (shortId) => {
    const res = await fetch(`/articles/${shortId}`)
    return Promise.resolve(res);
  };

  const compare = async (id) => {
    const res = await fetch(`/eligibility/compare/${id}`)
    return Promise.resolve(res);
  };

  const assign = async assignment => {
    const res = await fetch('/articles/assign', {
      method: 'POST',
      body: JSON.stringify(assignment)
    });
    return Promise.resolve(res);
  };

  const getArticlesByBatch = async (id) => {
    const res = await fetch(`/articles/batch/${id}`)
    return Promise.resolve(res);
  }

  return {
    create,
    get,
    eligibilityFilters,
    assign,
    getArticlesByBatch,
    compare
  };
};

export default ArticleService;
