/**
 * Article suggest using elasticsearch?
 */
module.exports = ({ searchRepository }) => {
  const suggest = async (opts) => {
    const { lang } = opts;

    try {
      const results = await searchRepository.suggest();

      // we'll need to translate the articles into the proper format for
      // consumption on the API / legacy frontends

      return results;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    suggest,
  };
};
