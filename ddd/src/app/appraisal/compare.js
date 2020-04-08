const diff = require("deep-diff");

/**
 * Eligibility compare
 */
module.exports = ({ appraisalRepository }) => {
  const compare = async articleId => {
    if (!articleId) {
      return {
        error: "A valid articleId is required"
      };
    }

    try {
      const appraisals = await appraisalRepository.findByArticleId(articleId);

      if (appraisals.length < 2) {
        return {
          error: "Two appraisals are required in order to compare"
        };
      }

      const source = appraisals[0];
      const target = appraisals[1];

      const filter = (path, key) =>
        path.length === 0 && ~["_id", "shortId", "userId"].indexOf(key) < 0;

      const differences = diff(source, target, filter);
      return differences || [];
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    compare
  };
};
