/**
 * Eligibility get
 */
module.exports = ({ eligibilityRepository, articleRepository }) => {
  const get = async (shortArticleId, userId) => {
    try {
      article = await articleRepository.findOne({
        shortId: { $eq: shortArticleId }
      });
      return await eligibilityRepository.find(article._id, userId);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    get
  };
};
