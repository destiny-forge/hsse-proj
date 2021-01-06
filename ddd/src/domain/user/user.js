const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

const User = t.struct(
  {
    _id: t.String,
    legacyId: t.maybe(t.String),
    confirmed: t.Boolean,
    email: t.String,
    password: t.String,
    role: t.String,
    limit_search: t.Boolean,
    limit_search_expires: t.String,
    createdAt: t.maybe(t.Date),
    updatedAt: t.maybe(t.Date),
  },
  {
    defaultProps: {
      limit_search: false,
      limit_search_expires: "",
    },
  }
);

module.exports = compose(cleanData, User, cleanMongoId);
