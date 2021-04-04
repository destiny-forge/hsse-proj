/**
 * Article search
 */
module.exports = ({ client }) => {
  const search = async (opts) => {
    const {
      type,
      // lang,
      // q,
      // applied_filters,
      // sort_by,
      // page,
      // monthly_update,
      // related_article_id,
    } = opts;

    try {
      const index = `${type}-articles`;
      const query = {
        match: { legacyId: 1 },
      };
      // formatted in the expected result to match API contract
      const results = await client.search(index, query);
      return results;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    search,
  };
};
