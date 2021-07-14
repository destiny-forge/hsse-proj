/**
 * Synthesis creation
 */
module.exports = ({ _articleRepository, synthesisRepository }) => {
  const create = async (refId) => {
    try {
      if (!refId) {
        return {
          error: "A valid refId is required",
        };
      }

      return await synthesisRepository.create(refId);
    } catch (error) {
      //console.log(error);
      throw new Error(error);
    }
  };

  return {
    create,
  };
};
