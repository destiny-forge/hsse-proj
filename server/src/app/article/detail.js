/**
 * Article detail query
 */
module.exports = ({ articleRepository }) => {
  const detail = async ({}) => {
    try {
      return await articleRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    detail,
  };
};
