const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const Subscription = t.struct(
  {
    _id: t.maybe(t.String),
    legacyId: t.maybe(t.String),
    email: t.String,
    filters: t.Array,
    subscribed: t.Boolean,
  },
  {
    defaultProps: {
      filters: [],
      subscribed: true,
    },
  }
);

module.exports = compose(cleanData, Subscription, cleanMongoId);
