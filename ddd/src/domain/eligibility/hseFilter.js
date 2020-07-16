const t = require("tcomb");
const Filter = require("./filter");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const HSEFilter = Filter.extend(
  {
    generalFocus: t.Boolean,
    selectedStatus: t.String,
  },
  {
    defaultProps: {
      type: "hse",
      documentType:
        "NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclusion in HSE.",
    },
  }
);

//module.exports = HSEArticle;
module.exports = compose(cleanData, HSEFilter, cleanMongoId);
