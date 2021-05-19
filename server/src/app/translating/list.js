/**
 * Translating Titles / Article list
 */
module.exports = ({ articleRepository }) => {
  const list = async (type, language, priority) => {
    try {
      let statuses = ["New article"];
      return await articleRepository.findByLanguage(
        type,
        language,
        priority,
        statuses
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
  };
};
