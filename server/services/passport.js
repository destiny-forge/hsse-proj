const mongoose = require('mongoose');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const UserModelClass = mongoose.model('Users');

const localOptions = { usernameField: 'email' }

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    UserModelClass.findOne({ email: email }, function(err, user) {
        if(err) { return done(err); }
        if(!user) { return done(null, false); }

        if(!user.confirmed) {
            console.log("Please confirm your email");
            return done(null, false);
        }

        user.comparePassword(password, function(err, isMatch) {
            if(err) { return done(err); }
            if(!isMatch) { return done(null, false); }

            return done(null, user);
        });

    });
});

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
    secretOrKey: process.env.JWT_SECRET
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    
    UserModelClass.findById(payload.sub, function(err, user) {
        if (err) { return done(err, false); }

        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    })

});

passport.use(jwtLogin);
passport.use(localLogin);