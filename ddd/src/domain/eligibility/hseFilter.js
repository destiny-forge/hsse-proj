const t = require("tcomb");
const Filter = require("./filter");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const HSEFilter = Filter.extend(
  {},
  {
    defaultProps: {
      type: "hse",
    },
  }
);

//module.exports = HSEArticle;
module.exports = compose(cleanData, HSEFilter, cleanMongoId);
