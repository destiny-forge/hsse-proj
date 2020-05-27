const Translation = require("src/domain/translation");

/**
 * Translation creation
 */
module.exports = ({ articleRepository }) => {
  const create = async (translation) => {
    try {
      if (!translation.articleId) {
        return {
          error: "Translation 'articleId' field is required",
        };
      }
      if (!translation.language) {
        return {
          error: "Translation 'language' field is required",
        };
      }
      if (!translation.text) {
        return {
          error: "Translation 'text' field is required",
        };
      }
      if (translation.isApproved === null) {
        return {
          error: "Translation 'isApproved' field is required",
        };
      }

      const entity = Translation(translation);

      return await articleRepository.createTranslation(entity, "titles");
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create,
  };
};
