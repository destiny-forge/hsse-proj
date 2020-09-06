const t = require("tcomb");
const shortid = require("shortid");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const Appraisal = t.struct(
  {
    _id: t.maybe(t.String),
    legacyId: t.maybe(t.String),
    shortId: t.String,
    articleId: t.maybe(t.Object),
    userId: t.maybe(t.Object),
    role: t.String,

    questions: t.Array,

    status: t.String,
    completed: t.Boolean,
    amstarNumerator: t.Number,
    amstarDenominator: t.Number,
  },
  {
    defaultProps: {
      shortId: shortid.generate(),
      status: "In Progress",
      completed: false,
    },
  }
);

module.exports = compose(cleanData, Appraisal, cleanMongoId);
