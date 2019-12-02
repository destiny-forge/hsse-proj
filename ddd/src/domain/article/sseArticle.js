const Article = require("./article");

/* If the hse/sse models diverge we can adapt */
const SSEArticle = Article.extend(
  {},
  {
    defaultProps: {
      type: "sse"
    }
  }
);

module.exports = SSEArticle;
