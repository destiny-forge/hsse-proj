/**
 * Translation list
 */
module.exports = ({ articleRepository }) => {
  const list = async (language, priority) => {
    if (!language) {
      return {
        error: "A valid language is required",
      };
    }
    if (!priority) {
      return {
        error: "A valid priority is required",
      };
    }

    try {
      return await articleRepository.getTranslationQueue(
        language,
        "titles",
        "high"
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
  };
};
