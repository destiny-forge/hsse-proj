const t = require("tcomb");
const Filter = require("./filter");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const SSEFilter = Filter.extend(
  {},
  {
    defaultProps: {
      type: "sse",
    },
  }
);

//module.exports = HSEArticle;
module.exports = compose(cleanData, SSEFilter, cleanMongoId);
