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

    if (filters.length === 2) {
      if (
        filters[0].selectedStatus === "Data Entry Complete" &&
        filters[1].selectedStatus === "Data Entry Complete"
      ) {
        const conflicts = diff.compareFilters(filters, filters[0].userId);
        status = conflicts.length > 0 ? "Conflicted" : "Complete";
      }
    }

    stage.updateStatus(articleId, "eligibility", status);

    filters.forEach((filter) => {
      console.log(filter.selectedStatus);
      stage.updateCoderStatus(
        articleId,
        "eligibility",
        filter.role,
        filter.selectedStatus
      );
    });
  });
};
