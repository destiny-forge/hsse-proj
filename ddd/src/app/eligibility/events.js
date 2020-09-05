const Stage = require("../article/stage");
const Diff = require("./compare");

/**
 * Eligibility related event handlers
 */
module.exports = ({ events, eligibilityRepository, articleRepository }) => {
  const stage = Stage({ articleRepository });
  const diff = Diff({ eligibilityRepository });

  events.on("article.eligibility.coded", async (articleId) => {
    const filters = await eligibilityRepository.findByArticleId(articleId);
    let status = "In Progress";
    const first = filters[0];
    const second = filters[1];

    if (filters.length === 2) {
      if (
        first.selectedStatus === "Data Entry Complete" &&
        second.selectedStatus === "Data Entry Complete"
      ) {
        const conflicts = diff.compareFilters(filters, first.userId);
        status = conflicts.length > 0 ? "Conflicted" : "Complete";

        if (status === "Complete") {
          // @TODO: What other fields should we update on the
          // original article so that we don't have to update
          // it within the stages section anymore once it's been
          // completed and validated?????
          articleRepository.update(articleId, {
            "stages.eligibility.data": first,
            documentType: first.documentType,
          });
        }
      }
    }

    stage.updateStatus(articleId, "eligibility", status);

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
