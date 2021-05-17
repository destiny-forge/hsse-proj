/**
 * Article detail query
 */
module.exports = ({ articleRepository }) => {
  const detail = async (id, type, lang) => {
    try {
      let article = {};
      const isNumeric = !isNaN(id);

      if (isNumeric) {
        article = await articleRepository.findByLegacyId(parseInt(id), type);
      } else {
        article = await articleRepository.findById(id);
      }

      return article;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    detail,
  };
};
