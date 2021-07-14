const Article = require("./article");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const CVDArticle = Article.extend(
  {},
  {
    defaultProps: {
      type: "cvd",
    },
  }
);

module.exports = compose(cleanData, CVDArticle, cleanMongoId);
