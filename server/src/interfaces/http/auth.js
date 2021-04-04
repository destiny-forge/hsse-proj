const passport = require("passport");
const { ExtractJwt, Strategy } = require("passport-jwt");
const _ = require("underscore");

/**
 * middleware to check if auth vaid
 */

module.exports = ({ config, repository: { userRepository } }) => {
  const params = {
    secretOrKey: config.authSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("bearer"),
  };

  const strategy = new Strategy(params, (payload, done) => {
    userRepository
      .findById(payload.id)
      .then((user) => {
        done(null, _.pick(user, "_id", "email", "role"));
      })
      .catch((error) => done(error, null));
  });

  passport.use(strategy);

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate("jwt");
    },
  };
};
