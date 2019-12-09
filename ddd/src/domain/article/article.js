const t = require("tcomb");
// const tx = require("tcomb-additional-types");
const shortid = require("shortid");

/* Not to be instantiated directly, used as the base Article
 * for all the shared fields between the HSEArticle and SSEArticle
 */
const Article = t.struct(
  {
    // legacyId: t.String,
    // batchId: tx.String.MongoId,
    shortId: t.String,

    title: t.String,
    journal: t.String,
    authors: t.String,
    source: t.String,
    type: t.String,

    language: t.String,
    complicated: t.Boolean,
    lost: t.Boolean,

    published: t.Date
  },
  {
    defaultProps: {
      shortId: shortid.generate(),
      source: "Single article from referrals",
      language: "English",
      complicated: false,
      lost: false
    }
  }
);

module.exports = Article;
