const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const Subscription = t.struct(
  {
    _id: t.maybe(t.String),
    legacyId: t.maybe(t.Number),
    type: t.String,
    email: t.String,
    subscriptions: t.Array,
  },
  {
    defaultProps: {
      subscriptions: [],
    },
  }
);

module.exports = compose(cleanData, Subscription, cleanMongoId);
