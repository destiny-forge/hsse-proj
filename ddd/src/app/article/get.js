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
      return await articleRepository.findOne({
        shortId: { $eq: shortArticleId }
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    get
  };
};
