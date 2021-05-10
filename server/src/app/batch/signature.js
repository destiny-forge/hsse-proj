const Batch = require("src/domain/batch");
const { hseArticle, sseArticle } = require("src/domain/article");

const { parse } = require("./parse");
const file = require("./file");

/**
 * Batch creation
 */
module.exports = ({ config }) => {
  const getSignature = async (type, contentType) => {
    try {
      if (!type || (type !== "sse" && type !== "hse")) {
        return {
          error: "A valid type is required",
        };
      }

      // Create articles from csv and associate with batch
      const { getSignedUrl } = file({ config, type, contentType });
      return await getSignedUrl();
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    getSignature,
  };
};
