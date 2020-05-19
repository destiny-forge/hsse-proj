const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const User = t.struct({
  _id: t.String,
  legacyId: t.maybe(t.String),
  confirmed: t.Boolean,
  email: t.String,
  password: t.String,
  roles: t.list(t.String),
  createdAt: t.maybe(t.Date),
  updatedAt: t.maybe(t.Date),
});

module.exports = compose(cleanData, User, cleanMongoId);
