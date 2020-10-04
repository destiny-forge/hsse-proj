const Stage = require("../article/stage");
const Diff = require("./compare");
const ObjectID = require("mongodb").ObjectID;

/**
 * Appraisal related event handlers
 */
module.exports = ({ events, appraisalRepository, articleRepository }) => {
  const stage = Stage({ articleRepository });
  const diff = Diff({ appraisalRepository });

  events.on("article.appraisals.coded", async (articleId) => {
    const appraisals = await appraisalRepository.findByArticleId(articleId);
    let status = "In Progress";

    if (appraisals.length === 2) {
      const first = appraisals[0];
      const second = appraisals[1];
      if (first.status === "Complete" && second.status === "Complete") {
        const conflicts = diff.compareAppraisals(appraisals, first.userId);
        status = conflicts.length > 0 ? "Conflicted" : "Complete";

        if (status === "Complete") {
          const {
            _id,
            questions,
            complicated,
            amstarNumerator,
            amstarDenominator,
            notInEnglish,
            noFreeFullText,
          } = first;
          articleRepository.update(articleId, {
            "stages.appraisals._id": new ObjectID(_id),
            questions,
            complicated,
            amstarNumerator,
            amstarDenominator,
            notInEnglish,
            noFreeFullText,
          });
        }
        stage.updateStatus(articleId, "appraisals", status);
      }
    }

    appraisals.forEach((appraisal) => {
      stage.updateCoderStatus(
        articleId,
        "appraisals",
        appraisal.role,
        appraisal.status
      );
    });
  });
};
