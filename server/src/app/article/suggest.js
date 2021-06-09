/**
 * Article suggest using elasticsearch?
 */
module.exports = ({ client }) => {
  const suggest = async (q, type, lang) => {
    try {
      const index = `${type}-articles`;
      const field = `title_suggest_${lang}`;
      const query = {};
      const suggest = {
        suggest: {
          "article-suggest": {
            prefix: "wtf",
            completion: {
              field,
            },
          },
        },
      };

      //const results = await client.suggest(index, query, suggest);
      //console.log(results);

      return [
        { count: 695, filter_id: "2_2383", query: "poverty", type: "filter" },
        { count: 101, filter_id: "2_2262", query: "Poverty", type: "filter" },
      ];

      //return results;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return {
    suggest,
  };
};
