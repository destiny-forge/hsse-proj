const Article = require("./article");

const HSEArticle = Article.extend(
  {},
  {
    defaultProps: {
      type: "hse"
    }
  }
);

module.exports = HSEArticle;
