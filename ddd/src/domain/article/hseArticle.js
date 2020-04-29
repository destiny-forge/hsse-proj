const Article = require("./article");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const HSEArticle = Article.extend(
  {},
  {
    defaultProps: {
      type: "hse",
    },
  }
);

//module.exports = HSEArticle;
module.exports = compose(cleanData, HSEArticle, cleanMongoId);
