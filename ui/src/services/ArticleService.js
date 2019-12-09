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
    const res = await fetch('/articles', {
      method: 'GET',
      body: JSON.stringify({
        type
      })
    });
    return Promise.resolve(res);
  };

  return {
    create,
    list
  };
};

export default ArticleService;
