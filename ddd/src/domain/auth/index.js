const t = require('tcomb');

const Auth = t.struct({
  email: t.String,
  password: t.String
});

module.exports = Auth;
