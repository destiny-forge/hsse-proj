const { hseFilter, sseFilter } = require("src/domain/eligibility");
const ObjectID = require("mongodb").ObjectID;
const shortid = require("shortid");
/**
 * Eligibility filter creation
 */
module.exports = ({ eligibilityRepository, events }) => {
  const create = async (eligibility) => {
    try {
      if (
        !eligibility.type ||
        (eligibility.type !== "sse" && eligibility.type !== "hse")
      ) {
        return {
          error: "A valid filter type is required",
        };
      }
      if (!eligibility.userId) {
        return {
          error: "A valid filter userId is required",
        };
      }

      if (eligibility._id) {
        const _id = eligibility._id;
        delete eligibility._id;

        eligibility.articleId = new ObjectID(eligibility.articleId);
        eligibility.userId = new ObjectID(eligibility.userId);

        const result = await eligibilityRepository.update(_id, eligibility);

        if (eligibility.action === "coding") {
          events.emit("article.eligibility.coded", eligibility.articleId);
        }

        return result;
      } else {
        eligibility.published = eligibility.published
          ? new Date(eligibility.published, 1, 1)
          : new Date();

        eligibility.articleId = new ObjectID(eligibility.articleId);
        eligibility.userId = new ObjectID(eligibility.userId);
        eligibility.shortId = shortid.generate();

        const entity =
          eligibility.type === "sse"
            ? sseFilter(eligibility)
            : hseFilter(eligibility);

        const result = await eligibilityRepository.create(entity);
        events.emit("article.eligibility.coded", eligibility.articleId);

        return result;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return {
    create,
  };
};
