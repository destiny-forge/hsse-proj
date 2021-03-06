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
    salt: t.maybe(t.String),
    firstName: t.maybe(t.String),
    lastName: t.maybe(t.String),
    language: t.maybe(t.String),
    country: t.maybe(t.String),
    type: t.String,
    roles: t.Array,
    client_roles: t.Array,
    limit_search: t.Boolean,
    limit_search_expires: t.String,
    createdAt: t.maybe(t.Date),
    updatedAt: t.maybe(t.Date),
  },
  {
    defaultProps: {
      roles: ["user"],
      client_roles: [],
      limit_search: false,
      limit_search_expires: "",
      firstName: "",
      lastName: "",
      language: "en",
    },
  }
);

module.exports = compose(cleanData, User, cleanMongoId);
