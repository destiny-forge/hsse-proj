/**
 * Studies batch article listing
 */
module.exports = ({ articleRepository }) => {
  const list = async (type, status) => {
    try {
      if (!type || (type !== "sse" && type !== "hse")) {
        return {
          error: "A valid article type is required",
        };
      }

      const docTypes = [
        "Overviews of systematic reviews",
        "Systematic reviews of effects",
        "Systematic reviews addressing other questions",
      ];

      const matches = [
        { "stages.eligibility.status": "Complete" },
        { "stages.appraisals.status": "Complete" },
      ];

      return await articleRepository.aggregate(
        type,
        "studies",
        status,
        docTypes,
        matches
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

      const matches = [
        { "stages.eligibility.status": "Complete" },
        { "stages.appraisals.status": "Complete" },
      ];

      return await articleRepository.findByBatchAndDocTypes(
        batchId,
        docTypes,
        matches
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
    listByBatch,
  };
};
