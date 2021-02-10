/**
 * Article search using elasticsearch
 */
module.exports = ({ searchRepository }) => {
  const search = async (opts) => {
    const {
      lang,
      q,
      applied_filters,
      sort_by,
      page,
      monthly_update,
      related_article_id,
    } = opts;

    try {
      return await searchRepository.search();
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    search,
  };
};
