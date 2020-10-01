const Stage = require("../article/stage");
const Diff = require("./compare");

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
          articleRepository.update(articleId, {
            "stages.appraisals.data": first,
            complicated: first.complicated,
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
