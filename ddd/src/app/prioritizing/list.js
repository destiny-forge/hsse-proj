/**
 * Prioritizing
 */
module.exports = ({ articleRepository }) => {
  const list = async (type) => {
    try {
      return await articleRepository.aggregateMonthlyUpdates(type);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return {
    list,
  };
};
