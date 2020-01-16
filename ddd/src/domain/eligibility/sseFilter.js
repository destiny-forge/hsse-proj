const Filter = require("./filter");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const SSEFilter = Filter.extend(
  {
    documentType: t.enums.of(
      [
        "Evidence briefs for policy",
        "Overviews of systematic reviews",
        "Systematic reviews of effects",
        "Systematic reviews addressing other questions",
        "Systematic reviews in progress",
        "Systematic reviews being planned",
        "Economic evaluations and costing studies",
        "Health reform descriptions",
        "Health system descriptions",
        "Intergovernmental organizations' health systems documents",
        "Systematic reviews and other types of syntheses",
        "Canada's health systems documents",
        "Ontario's health system documents",
        "NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclusion in HSE."
      ],
      "documentType"
    )
  },
  {
    defaultProps: {
      type: "sse",
      documentType:
        "NO. After reviewing the document types and eligibility criteria, this record is not eligible for inclusion in SSE."
    }
  }
);

//module.exports = HSEArticle;
module.exports = compose(cleanData, SSEFilter, cleanMongoId);
