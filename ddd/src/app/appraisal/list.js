/**
 * Appraisal list
 */
module.exports = ({ articleRepository }) => {
  const list = async (type, status) => {
    try {
      if (!type || (type !== "sse" && type !== "hse")) {
        return {
          error: "A valid article type is required",
        };
      }

      var filters = status; //status.split(",")

      const docTypes = [
        "Overviews of systematic reviews",
        "Systematic reviews of effects",
        "Systematic reviews addressing other questions",
      ];
      return await articleRepository.aggregate(
        type,
        "appraisals",
        filters,
        docTypes
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  const listByBatch = async (batchId) => {
    try {
      if (!batchId) {
        return {
          error: "A valid batchId is required",
        };
      }
      const docTypes = [
        "Overviews of systematic reviews",
        "Systematic reviews of effects",
        "Systematic reviews addressing other questions",
      ];
      return await articleRepository.findByBatchAndDocTypes(batchId, docTypes);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
    listByBatch,
  };
};
