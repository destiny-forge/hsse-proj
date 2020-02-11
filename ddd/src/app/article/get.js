/**
 * Article get
 */
module.exports = ({ articleRepository }) => {
  const get = async shortArticleId => {
    if (!shortArticleId) {
      return {
        error: "A valid shortArticleId is required"
      };
    }

    try {
      const article = await articleRepository.findOne({
        shortId: { $eq: shortArticleId }
      });

      if (!article) {
        return {
          error: "Article with shortArticleId not found"
        };
      }
      return await articleRepository.findById(article._id);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    get
  };
};
