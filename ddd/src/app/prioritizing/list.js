/**
 * Prioritizing
 */
module.exports = ({ articleRepository }) => {
  const listGoLive = async (type) => {
    try {
      return await articleRepository.aggregateMonthlyUpdates(type);
    } catch (error) {
      throw new Error(error);
    }
  };

  const listWaiting = async (type) => {
    try {
      return await articleRepository.aggregateBatchMonthlyUpdates(type);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    listGoLive,
    listWaiting,
  };
};
