const Stage = require("../article/stage");
const Diff = require("./compare");
const ObjectID = require("mongodb").ObjectID;
const _ = require("lodash");

/**
 * Eligibility related event handlers
 */
module.exports = ({ events, eligibilityRepository, articleRepository }) => {
  const stage = Stage({ articleRepository });
  const diff = Diff({ eligibilityRepository });

  events.on("article.eligibility.coded", async (articleId) => {
    const filters = await eligibilityRepository.findByArticleId(articleId);
    const finalFilters = _.clone(filters[0].filters);
    let status = "In progress";

    if (filters.length === 2) {
      const first = filters[0];
      const second = filters[1];
      if (
        first.selectedStatus === "Data entry complete" &&
        second.selectedStatus === "Data entry complete"
      ) {
        const conflicts = diff.compareFilters(filters, first.userId);
        status =
          conflicts.length > 0 ? "Discrepancy detected" : "Data entry complete";

        if (status === "Data entry complete") {
          const { _id, documentType, questionType, generalFocus } = first;
          articleRepository.update(articleId, {
            "stages.eligibility._id": new ObjectID(_id),
            documentType,
            questionType,
            generalFocus,
            filters: finalFilters,
            //relevant?
          });
        }

        stage.updateStatus(articleId, "eligibility", status);
      }
    }

    filters.forEach((filter) => {
      stage.updateCoderStatus(
        articleId,
        "eligibility",
        filter.role,
        filter.selectedStatus
      );
    });
  });
};
