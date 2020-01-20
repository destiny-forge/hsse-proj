/**
 * Eligibility get
 */
module.exports = ({ eligibilityRepository }) => {
  const get = async (articleId, userId) => {
    try {
      return await eligibilityRepository.findOne({
        articleId: { $eq: articleId },
        userId: { $eq: userId }
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    get
  };
};
