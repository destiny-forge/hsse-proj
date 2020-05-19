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

    questionOne: t.String,
    questionTwo: t.String,
    questionThree: t.String,
    questionFour: t.String,
    questionFive: t.String,
    questionSix: t.String,
    questionSeven: t.String,
    questionEight: t.String,
    questionNine: t.String,
    questionTen: t.String,
    questionEleven: t.String,

    amstarStatus: t.String,
    amstarNumerator: t.Number,
    amstarDenominator: t.Number,
  },
  {
    defaultProps: {
      shortId: shortid.generate(),
      amstarStatus: "In progress",
    },
  }
);

module.exports = compose(cleanData, Appraisal, cleanMongoId);
