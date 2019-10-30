const mongoose = require('mongoose');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

const UserModelClass = mongoose.model('Users');

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  UserModelClass.findOne({ email }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }

    if (!user.confirmed) {
      console.log('Please confirm your email');
      return done(null, false);
    }

    return user.comparePassword(password, (err2, isMatch) => {
      if (err2) {
        return done(err2);
      }
      if (!isMatch) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
  secretOrKey: process.env.JWT_SECRET,
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => UserModelClass.findById(payload.sub, (err, user) => {
  if (err) {
    return done(err, false);
  }

  if (user) {
    return done(null, user);
  }
  return done(null, false);
}));

passport.use(jwtLogin);
passport.use(localLogin);
