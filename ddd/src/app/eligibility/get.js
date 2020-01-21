/**
 * Eligibility get
 */
module.exports = ({ eligibilityRepository, articleRepository }) => {
  const get = async (shortArticleId, user) => {
    try {
      article = await articleRepository.findOne({
        shortId: { $eq: shortArticleId }
      });
      return await eligibilityRepository.find(article._id, user);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    get
  };
};
