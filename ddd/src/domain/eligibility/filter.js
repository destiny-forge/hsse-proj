const t = require("tcomb");
const shortid = require("shortid");

/* Not to be instantiated directly, used as the base Filter
 * for all the shared fields between the HSEFilter and SSEFilter
 */
const Filter = t.struct(
  {
    _id: t.maybe(t.String),
    legacyId: t.maybe(t.String),
    shortId: t.String,
    articleId: t.Object,
    userId: t.Object,
    role: t.String,
    type: t.String,
    generalFocus: t.maybe(t.Boolean),
    selectedStatus: t.maybe(t.String),
    questionType: t.maybe(t.String),
    documentType: t.maybe(t.String),
    filters: t.Array,
    relevant: t.Boolean,
    completed: t.Boolean,
  },
  {
    defaultProps: {
      shortId: shortid.generate(),
      selectedStatus: "In Progress",
      generalFocus: false,
      completed: false,
      relevant: true,
      filters: [],
    },
  }
);

module.exports = Filter;
