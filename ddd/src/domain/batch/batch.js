const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");
const shortid = require("shortid");

const Batch = t.struct(
  {
    // legacyId: t.String,
    shortId: t.String,

    referenceType: t.String,
    fileName: t.String,
    fileUrl: t.String,

    source: t.String,
    priority: t.String,
    type: t.String,
    language: t.String,

    uploaded: t.Date,
    harvested: t.Date
  },
  {
    defaultProps: {
      shortId: shortid.generate(),
      language: "English",
      uploaded: new Date(),
      harvested: new Date(),
      priority: "LOW"
    }
  }
);

module.exports = compose(cleanData, Batch, cleanMongoId);
