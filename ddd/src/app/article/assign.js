/**
 * Article assignment
 */
module.exports = ({ articleRepository }) => {
  const assign = async assignment => {
    try {
      if (
        !assignment.type ||
        assignment.type !== "junior" ||
        assignment.type !== "senior"
      ) {
        return {
          error: "A valid assignment type is required"
        };
      }

      if (!assignment.article._id) {
        return {
          error: "A valid article _id is required"
        };
      }

      if (!assignment.user._id) {
        return {
          error: "A valid user _id is required"
        };
      }

      const article_id = assignment.article._id;
      const { _id, name } = assignment.user;
      const entity = {
        [assignment.type]: { _id, name }
      };

      return await articleRepository.update(article_id, entity);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    assign
  };
};
