const t = require("tcomb");
const shortid = require("shortid");

/* Not to be instantiated directly, used as the base Filter
 * for all the shared fields between the HSEFilter and SSEFilter
 */
const Filter = t.struct(
  {
    _id: t.maybe(t.String),
    shortId: t.String,
    articleId: t.maybe(t.Object),
    userId: t.maybe(t.Object),
    role: t.String,

    type: t.String,

    relevance: t.Boolean,
    completed: t.Boolean,
    complicated: t.Boolean
  },
  {
    defaultProps: {
      shortId: shortid.generate(),
      relevance: false,
      completed: false,
      complicated: false
    }
  }
);

module.exports = Filter;
