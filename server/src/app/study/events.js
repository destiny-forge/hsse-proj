const Stage = require("../article/stage");
const ObjectID = require("mongodb").ObjectID;

/**
 * Study related event handlers
 */
module.exports = ({ events, studyRepository, articleRepository }) => {
  const stage = Stage({ articleRepository });

  events.on("article.study.coded", async (articleId) => {
    const articles = await studyRepository.findByArticleId(articleId);
    const study = articles[0];
    let status = "In progress";

    if (study.status === "Data entry complete") {
      status = "Data entry complete";

      try {
        const {
          _id,
          complicated,
          countriesNotReported,
          countryNotFocus,
          countryLinks,
          notInEnglish,
          noFreeFullText,
          largeReview,
        } = study;
        await articleRepository.update(articleId, {
          "stages.studies._id": new ObjectID(_id),
          complicated,
          countriesNotReported,
          countryNotFocus,
          countryLinks,
          notInEnglish,
          noFreeFullText,
          largeReview,
        });
      } catch (err) {
        console.log(err);
      }
    }

    stage.updateStatus(articleId, "studies", status);
    stage.updateCoderStatus(articleId, "studies", "senior", study.status);
  });
};
