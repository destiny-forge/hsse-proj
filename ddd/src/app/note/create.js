/**
 * Article note creation
 */
module.exports = ({ articleRepository }) => {
  const create = async articles => {
    try {
      if (!articles || articles === [] || !Array.isArray(articles)) {
        return {
          error: "A list of articles to update is required"
        };
      }

      articles.forEach(async article => {
        try {
          await articleRepository.update(article._id, { notes: article.notes });
        } catch (error) {}
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create
  };
};
