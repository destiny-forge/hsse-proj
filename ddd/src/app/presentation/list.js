/**
 * Presentation / Article list
 */
module.exports = ({ articleRepository }) => {
  const listByDocType = async (type, documentType, filter) => {
    try {
      let statuses = [];
      if (filter === "all") {
        statuses = ["New Article", "In Progress", "Live"];
      } else {
        statuses = ["In Progress"];
      }
      return await articleRepository.findByDocType(
        type,
        documentType,
        statuses
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    listByDocType,
  };
};
