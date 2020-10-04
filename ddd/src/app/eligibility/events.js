const Stage = require("../article/stage");
const Diff = require("./compare");
const ObjectID = require("mongodb").ObjectID;

/**
 * Eligibility related event handlers
 */
module.exports = ({ events, eligibilityRepository, articleRepository }) => {
  const stage = Stage({ articleRepository });
  const diff = Diff({ eligibilityRepository });

  events.on("article.eligibility.coded", async (articleId) => {
    const filters = await eligibilityRepository.findByArticleId(articleId);
    let status = "In Progress";

    if (filters.length === 2) {
      const first = filters[0];
      const second = filters[1];
      if (
        first.selectedStatus === "Data Entry Complete" &&
        second.selectedStatus === "Data Entry Complete"
      ) {
        const conflicts = diff.compareFilters(filters, first.userId);
        status = conflicts.length > 0 ? "Conflicted" : "Complete";

        if (status === "Complete") {
          const { _id, documentType, questionType, filters } = first;
          articleRepository.update(articleId, {
            "stages.eligibility._id": new ObjectID(_id),
            documentType,
            questionType,
            generalFocus,
            filters,
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
