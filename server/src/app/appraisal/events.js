const Stage = require("../article/stage");
const Diff = require("./compare");
const ObjectID = require("mongodb").ObjectID;
const _ = require("lodash");

/**
 * Appraisal related event handlers
 */
module.exports = ({ events, appraisalRepository, articleRepository }) => {
  const stage = Stage({ articleRepository });
  const diff = Diff({ appraisalRepository });

  events.on("article.appraisals.coded", async (articleId) => {
    const appraisals = await appraisalRepository.findByArticleId(articleId);
    const cleanQuestions = _.clone(appraisals[0].cleanQuestions);
    let status = "In progress";

    if (appraisals.length === 2) {
      const first = appraisals[0];
      const second = appraisals[1];
      if (
        first.status === "Data entry complete" &&
        second.status === "Data entry complete"
      ) {
        const conflicts = diff.compareAppraisals(appraisals, first.userId);
        status =
          conflicts.length > 0 ? "Discrepancy detected" : "Data entry complete";

        if (status === "Data entry complete") {
          const {
            _id,
            complicated,
            amstarNumerator,
            amstarDenominator,
            notInEnglish,
            noFreeFullText,
          } = first;
          articleRepository.update(articleId, {
            "stages.appraisals._id": new ObjectID(_id),
            questions: cleanQuestions,
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
