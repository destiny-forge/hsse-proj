const Study = require("src/domain/study");
const ObjectID = require("mongodb").ObjectID;

/**
 * Linking study creation
 */
module.exports = ({ studyRepository }) => {
  const create = async (study) => {
    try {
      if (study._id) {
        const _id = study._id;
        delete study._id;
        return await studyRepository.update(_id, study);
      } else {
        study.articleId = new ObjectID(study.articleId);
        study.userId = new ObjectID(study.userId);

        const entity = Study(study);
        return await studyRepository.create(entity);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create,
  };
};
