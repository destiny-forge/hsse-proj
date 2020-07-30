const Stage = require("../article/stage");
const Batch = require("./count");

/**
 * Eligibility related event handlers
 */
module.exports = ({ events, eligibilityRepository, articleRepository }) => {
  const stage = Stage({ articleRepository });
  const batch = Batch({ eligibilityRepository });

  events.on("article.eligibility.coded", async (articleId) => {
    const count = await batch.count(articleId);
    const status = count == 1 ? "half_coded" : "fully_coded";
    stage.updateStatus(articleId, "eligibility", status);
  });
};
