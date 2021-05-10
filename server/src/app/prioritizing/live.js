/**
 * Prioritizing make live
 */
module.exports = ({ articleRepository }) => {
  const goLive = async (monthlyUpdateDate) => {
    // @TODO: when go live with articles, we need to ensure
    // they are indexed in elastic search so that they show
    // up in search queries as well as monthly emails
    try {
      return await articleRepository.goLive(monthlyUpdateDate);
    } catch (error) {
      throw new Error(error);
    }
  };

  const makeLive = async (batchId) => {
    // @TODO: when go live with articles, we need to ensure
    // they are indexed in elastic search so that they show
    // up in search queries as well as monthly emails
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
