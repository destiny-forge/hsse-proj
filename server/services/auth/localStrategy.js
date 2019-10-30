const mongoose = require('mongoose');
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

module.exports = localLogin;
