const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const Update = t.struct(
  {
    _id: t.maybe(t.String),
    type: t.String,
    date: t.Date,
    live: t.Boolean,
  },
  {
    defaultProps: {
      live: false,
    },
  }
);

module.exports = compose(cleanData, Update, cleanMongoId);
