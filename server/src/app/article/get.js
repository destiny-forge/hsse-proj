/**
 * Article get
 */
module.exports = ({ articleRepository }) => {
  const get = async (shortArticleId) => {
    if (!shortArticleId) {
      return {
        error: "A valid shortArticleId is required",
      };
    }

    let key = parseInt(shortArticleId) ? "legacyId" : "shortId";
    let value = parseInt(shortArticleId) || shortArticleId;

    try {
      return await articleRepository.findOne({
        [key]: { $eq: value },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    get,
  };
};
