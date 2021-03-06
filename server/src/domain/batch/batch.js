const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const Batch = t.struct(
  {
    _id: t.maybe(t.String),
    legacyId: t.maybe(t.Number),
    shortId: t.String,
    name: t.maybe(t.String),

    referenceType: t.String,
    fileName: t.maybe(t.String),
    fileUrl: t.String,

    source: t.String,
    priority: t.String,
    type: t.String,
    language: t.String,

    uploaded: t.Date,
    harvested: t.maybe(t.Date),
    stages: t.maybe(t.Object),
  },
  {
    defaultProps: {
      language: "en",
      uploaded: new Date(),
      harvested: new Date(),
      priority: "low",
      stages: {
        eligibility: {},
        studies: {},
        appraisals: {},
      },
    },
  }
);

module.exports = compose(cleanData, Batch, cleanMongoId);
