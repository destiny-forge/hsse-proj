/**
 * Eligibility compare
 */
module.exports = ({ eligibilityRepository }) => {
  const resolve = async (articleId, changes) => {
    if (!articleId) {
      return {
        error: "A valid source filter is required"
      };
    }

    if (!changes) {
      return {
        error: "A valid diff changes array is required"
      };
    }

    try {
      // @TODO - update and use findOne to be less verbose
      // so that we can pass the filtering type rather than
      // it requiring a specific set of query terms.
      const filters = await eligibilityRepository.find({
        articleId,
        role: "junior"
      });

      const target = filters[0];
      //const source = filters[1];

      console.log(target);

      changes.forEach(change => {
        diff.applyChange(target, change);
      });

      console.log(target);

      const filter = eligibilityRepository.update(target._id, target);
      return filter;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    resolve
  };
};
