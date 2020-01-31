/**
 * Article list
 */
module.exports = ({ articleRepository }) => {
  const list = async (type, stage, status) => {
    try {
      if (!type || (type !== "sse" && type !== "hse")) {
        return {
          error: "A valid article type is required"
        };
      }
      return await articleRepository.find(type, stage, status);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list
  };
};
