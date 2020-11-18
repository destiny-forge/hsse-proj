/**
 * Prioritizing assign to go live
 */
module.exports = ({ articleRepository, batchRepository }) => {
  const assign = async (batchId) => {
    try {
      articleRepository.assignMonthlyUpdate(batchId, monthlyUpdateDate);
      return await batchRepository.assignMonthlyUpdate(
        batchId,
        monthlyUpdateDate
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    assign,
  };
};
