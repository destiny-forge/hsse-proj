/**
 * Prioritizing make live
 */
module.exports = ({ articleRepository }) => {
  const goLive = async (monthlyUpdateDate) => {
    try {
      return await articleRepository.goLive(monthlyUpdateDate);
    } catch (error) {
      throw new Error(error);
    }
  };

  const makeLive = async (batchId) => {
    try {
      return await articleRepository.makeLiveWithoutMonthlyUpdate(batchId);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    goLive,
    makeLive,
  };
};
