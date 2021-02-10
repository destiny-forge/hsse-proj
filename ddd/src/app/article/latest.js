/**
 * Article latest
 */
module.exports = ({ articleRepository }) => {
  const latest = async ({}) => {
    try {
      return await articleRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    latest,
  };
};
