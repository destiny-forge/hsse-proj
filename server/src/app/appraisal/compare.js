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

      return compareAppraisals(appraisals, userId);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const compareAppraisals = (appraisals, userId) => {
    const first = appraisals[0];
    const second = appraisals[1];
    let source, target;

    if (first.userId == userId) {
      source = first;
      target = second;
    } else {
      source = second;
      target = first;
    }

    // re-map filters from array into objects
    source.questions = mapQuestions(source.questions);
    target.questions = mapQuestions(target.questions);

    const filter = (path, key) =>
      path.length === 0 &&
      ~[
        "_id",
        "shortId",
        "userId",
        "completed",
        "complicated",
        "role",
        "status",
        "amstarNumerator",
        "amstarDenominator",
      ].indexOf(key) < 0;

    const diffs = diff(source, target, filter);
    const differences = diffs || [];

    return differences;
  };

  const mapQuestions = (questions) => {
    const objects = {};
    questions.forEach((question) => {
      objects[question.key] = question.value;
    });
    return objects;
  };

  return {
    compare,
    compareAppraisals,
  };
};
