const diff = require("deep-diff");

/**
 * Eligibility compare
 */
module.exports = ({ appraisalRepository }) => {
  const compare = async (articleId, userId) => {
    if (!articleId) {
      return {
        error: "A valid articleId is required",
      };
    }
    if (!userId) {
      return {
        error: "A valid userId is required",
      };
    }

    try {
      const appraisals = await appraisalRepository.findByArticleId(articleId);

      if (appraisals.length < 2) {
        return {
          error: "Two appraisals are required in order to compare",
        };
      }

      const source =
        appraisals[0].userId === userId ? appraisals[0] : appraisals[1];
      const target =
        appraisals[1].userId === userId ? appraisals[1] : appraisals[0];

      const filter = (path, key) =>
        path.length === 0 &&
        ~["_id", "shortId", "userId", "role"].indexOf(key) < 0;

      const diffs = diff(source, target, filter);
      const differences = diffs || [];

      return differences;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    compare,
  };
};
