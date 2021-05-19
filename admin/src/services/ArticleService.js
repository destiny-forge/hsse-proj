/*
 * Article service for interacting with the API backend
 */

const ArticleService = ({ fetch }) => {
  const create = async (article) => {
    const res = await fetch('/admin-articles', {
      method: 'POST',
      body: JSON.stringify(article),
    });
    return Promise.resolve(res);
  };

  const eligibilityFilters = async () => {
    const res = await fetch('/eligibility-filters');
    return Promise.resolve(res);
  };

  const get = async (type, shortId) => {
    const params = {
      method: 'GET',
      data: {
        type,
      },
    };
    const res = await fetch(`/admin-articles/${shortId}`, params);
    return Promise.resolve(res);
  };

  const assign = async (assignment) => {
    const res = await fetch('/admin-articles/assign', {
      method: 'POST',
      body: JSON.stringify(assignment),
    });
    return Promise.resolve(res);
  };

  const getArticlesByBatch = async (id, stage) => {
    const res = await fetch(`/admin-articles/batch/${stage}/${id}`);
    return Promise.resolve(res);
  };

  return {
    create,
    get,
    eligibilityFilters,
    assign,
    getArticlesByBatch,
  };
};

export default ArticleService;
