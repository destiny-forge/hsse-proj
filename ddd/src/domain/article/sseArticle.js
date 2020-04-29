const Article = require("./article");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

/* If the hse/sse models diverge we can adapt */
const SSEArticle = Article.extend(
  {},
  {
    defaultProps: {
      type: "sse",
    },
  }
);

//module.exports = SSEArticle;
module.exports = compose(cleanData, SSEArticle, cleanMongoId);
