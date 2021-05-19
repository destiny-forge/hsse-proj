const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const Appraisal = t.struct(
  {
    _id: t.maybe(t.String),
    legacyId: t.maybe(t.String),
    shortId: t.maybe(t.String),
    articleId: t.maybe(t.Object),
    userId: t.maybe(t.Object),
    role: t.String,

    questions: t.Array,

    status: t.String,
    completed: t.Boolean,
    complicated: t.Boolean,
    notInEnglish: t.Boolean,
    noFreeFullText: t.Boolean,
    amstarNumerator: t.Number,
    amstarDenominator: t.Number,
  },
  {
    defaultProps: {
      status: "In progress",
      notInEnglish: false,
      noFreeFullText: false,
      completed: false,
      complicated: false,
    },
  }
);

module.exports = compose(cleanData, Appraisal, cleanMongoId);
