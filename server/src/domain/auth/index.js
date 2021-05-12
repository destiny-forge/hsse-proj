const t = require("tcomb");

const Auth = t.struct({
  type: t.String,
  email: t.String,
  password: t.String,
});

module.exports = Auth;
