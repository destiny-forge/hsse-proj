/**
 * Presentation / Article list
 */
module.exports = ({ articleRepository }) => {
  const listByDocType = async (type, documentType, filter) => {
    try {
      let statuses = [];
      if (filter === "all") {
        statuses = [
          "New article",
          "Data entry complete",
          "Completed",
          "Excluded",
          "Discrepancy detected",
        ];
      } else {
        statuses = ["New article"];
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
