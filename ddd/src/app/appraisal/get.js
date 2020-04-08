/**
 * Appraisal get
 */
module.exports = ({ appraisalRepository, articleRepository }) => {
  const get = async (shortArticleId, userId) => {
    if (!shortArticleId) {
      return {
        error: "A valid shortArticleId is required"
      };
    }

    if (!userId) {
      return {
        error: "A valid userId is required"
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
      return await appraisalRepository.findOne(article._id, userId);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    get
  };
};
