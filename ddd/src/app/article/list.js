/**
 * Article list
 */
module.exports = ({ articleRepository }) => {
  const list = async type => {
    try {
      if (!type || (type !== "sse" && type !== "hse")) {
        return {
          error: "A valid article type is required"
        };
      }
      return await articleRepository.findByType(type);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list
  };
};
