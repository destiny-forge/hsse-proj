const Study = require("src/domain/study");
const ObjectID = require("mongodb").ObjectID;

/**
 * Linking study creation
 */
module.exports = ({ studyRepository, events }) => {
  const create = async (study) => {
    try {
      if (!study.userId) {
        return {
          error: "A valid userId is required",
        };
      }

      if (!study.articleId) {
        return {
          error: "A valid articleId is required",
        };
      }

      study.articleId = new ObjectID(study.articleId);
      study.userId = new ObjectID(study.userId);

      let result = null;
      if (study._id) {
        const _id = study._id;
        delete study._id;
        result = await studyRepository.update(_id, study);
      } else {
        const entity = Study(study);
        result = await studyRepository.create(entity);
      }

      events.emit("article.study.coded", study.articleId);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create,
  };
};
