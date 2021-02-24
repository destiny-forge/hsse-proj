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
      const results = await searchRepository.search();

      // we'll need to translate the articles into the proper format for
      // consumption on the API / legacy frontends

      return results;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    search,
  };
};
