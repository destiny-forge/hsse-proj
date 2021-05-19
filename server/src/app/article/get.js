/**
 * Article get
 */
module.exports = ({ articleRepository }) => {
  const get = async (type, shortArticleId) => {
    if (!shortArticleId) {
      return {
        error: "A valid shortArticleId is required",
      };
    }

    let key = parseInt(shortArticleId) ? "legacyId" : "shortId";
    let value = parseInt(shortArticleId) || shortArticleId;

    try {
      return await articleRepository.findOne({
        type,
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
