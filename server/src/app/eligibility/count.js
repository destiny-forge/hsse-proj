/**
 * Eligibility count
 */
module.exports = ({ eligibilityRepository }) => {
  const count = async (articleId) => {
    const records = await eligibilityRepository.findByArticleId(articleId);
    return records.length;
  };

  return {
    count,
  };
};
