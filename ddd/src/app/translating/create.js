/**
 * Translation creation
 */
module.exports = ({ articleRepository }) => {
  const create = async (translation) => {
    const { articleId, language, text, approved, approvedBy } = translation;
    try {
      if (!articleId) {
        return {
          error: "A valid articleId is required",
        };
      }

      if (!language) {
        return {
          error: "A valid language is required",
        };
      }

      if (!text) {
        return {
          error: "A valid text is required",
        };
      }

      if (approved === null) {
        return {
          error: "A valid approved boolean is required",
        };
      }

      if (!approvedBy) {
        return {
          error: "A valid approvedBy user is required",
        };
      }

      return await articleRepository.updateTranslation(
        articleId,
        language,
        text,
        approved,
        approvedBy
      );
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return {
    create,
  };
};
