const passport = require('./passport');

const auth = {
  local: passport.authenticate('local', { session: false }),
  jwt: passport.authenticate('jwt', { session: false })
};

module.exports = auth;
