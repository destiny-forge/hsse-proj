const t = require("tcomb");
const Filter = require("./filter");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const SSEFilter = Filter.extend(
  {},
  {
    defaultProps: {
      type: "sse",
      documentType:
        "NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclusion in SSE.",
    },
  }
);

//module.exports = HSEArticle;
module.exports = compose(cleanData, SSEFilter, cleanMongoId);
