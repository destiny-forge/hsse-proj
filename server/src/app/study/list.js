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
        { "stages.eligibility.status": "Data entry complete" },
        { "stages.appraisals.status": "Data entry complete" },
      ];

      let statuses = [status, "Data entry complete"];

      if (status === "Complicated") {
        statuses.push("In progress");
      }

      return await articleRepository.aggregate(
        type,
        "studies",
        statuses,
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
        { "stages.eligibility.status": "Data entry complete" },
        { "stages.appraisals.status": "Data entry complete" },
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
