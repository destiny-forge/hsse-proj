/**
 * Prioritizing
 */
module.exports = ({ articleRepository }) => {
  const list = async () => {
    try {
      let statuses = ["New Article", "Data Entry Complete", "Live"];
      return await articleRepository.aggregateMonthlyUpdate(type, statuses);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
  };
};
