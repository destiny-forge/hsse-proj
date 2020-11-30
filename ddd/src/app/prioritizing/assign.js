/**
 * Prioritizing assign to go live
 */
module.exports = ({ articleRepository }) => {
  const assign = async (batchId, monthlyUpdateDate) => {
    try {
      return await articleRepository.assignMonthlyUpdate(
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
