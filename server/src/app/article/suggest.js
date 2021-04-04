/**
 * Article suggest using elasticsearch?
 */
module.exports = ({ client }) => {
  const suggest = async (opts) => {
    const { lang, type, prefix } = opts;
    try {
      const index = `${type}-articles`;
      const field = `title_suggest_${lang}`;
      const query = {};
      const suggest = {
        suggest: {
          "article-suggest": {
            prefix,
            completion: {
              field,
            },
          },
        },
      };
      const results = await client.suggest(index, query, suggest);
      return results;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    suggest,
  };
};
