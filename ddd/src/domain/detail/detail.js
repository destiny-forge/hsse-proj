const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");
const shortid = require("shortid");

const Detail = t.struct(
  {
    _id: t.maybe(t.String),
    // legacyId: t.String,
    shortId: t.String,
    name: t.maybe(t.String),
    userId: t.String,

    created: t.Date,
  },
  {
    defaultProps: {
      shortId: shortid.generate(),
      created: new Date(),
    },
  }
);

module.exports = compose(cleanData, Detail, cleanMongoId);
