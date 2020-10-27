/**
 * Translation approval
 */
module.exports = ({ articleRepository }) => {
  const approve = async (articleId, language, approvedBy) => {
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

      if (!approvedBy) {
        return {
          error: "A valid approvedBy user id is required",
        };
      }

      return await articleRepository.approveTranslation(
        articleId,
        language,
        approvedBy
      );
    } catch (error) {
      //console.log(error);
      throw new Error(error);
    }
  };

  return {
    approve,
  };
};
