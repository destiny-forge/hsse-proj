/**
 * Article stages
 */
module.exports = ({ articleRepository }) => {
  const updateStatus = async (articleId, stage, status) => {
    if (!articleId) {
      return {
        error: "A valid articleId is required",
      };
    }

    if (!stage) {
      return {
        error: "A valid stage is required",
      };
    }

    if (!status) {
      return {
        error: "A valid status is required",
      };
    }

    try {
      return await articleRepository.updateStage(articleId, stage, { status });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    updateStatus,
  };
};
