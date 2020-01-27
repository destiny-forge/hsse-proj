import { diff } from "deep-diff";

/**
 * Eligibility compare
 */
module.exports = ({ eligibilityRepository }) => {
  const compare = async articleId => {
    if (!articleId) {
      return {
        error: "A valid articleId is required"
      };
    }

    try {
      const filters = await eligibilityRepository.find({
        articleId
      });

      if (filters.length < 2) {
        return {
          error: "Two filters are required in order to compare"
        };
      }

      // @TODO - determine which filter is the junior, and which is
      // the senior by using the .role property

      const source = filters[0];
      const target = filters[1];

      const filter = (path, key) =>
        path.length === 0 &&
        [
          "_id",
          "shortId",
          "userId",
          "relevance",
          "completed",
          "complicated"
        ].indexOf(key) < 0;

      const differences = diff(source, target, filter);

      // testing required
      console.log(differences);

      return differences;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    compare
  };
};
