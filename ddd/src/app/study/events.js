const Stage = require("../article/stage");

/**
 * Study related event handlers
 */
module.exports = ({ events, studyRepository, articleRepository }) => {
  const stage = Stage({ articleRepository });

  events.on("article.study.coded", async (articleId) => {
    const articles = await studyRepository.findByArticleId(articleId);
    const study = articles[0];
    let status = "In Progress";

    if (study.status === "Data Entry Complete") {
      status = "Complete";
      // @TODO: What other fields should we update on the
      // original article so that we don't have to update
      // it within the stages section anymore once it's been
      // completed and validated?????
      try {
        await articleRepository.update(articleId, {
          "stages.studies.data": study,
          complicated: study.complicated,
        });
      } catch (err) {
        console.log(err);
      }
    }

    stage.updateStatus(articleId, "studies", status);
    stage.updateCoderStatus(articleId, "studies", "senior", study.status);
  });
};
