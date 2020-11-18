/**
 * Prioritizing make live
 */
module.exports = ({ articleRepository, batchRepository }) => {
  const live = async (batchId) => {
    try {
      articleRepository.makeLiveMonthlyUpdate(batchId, monthlyUpdateDate);
      return await batchRepository.makeLiveMonthlyUpdate(
        batchId,
        monthlyUpdateDate
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    live,
  };
};
