/**
 * @name authRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all authentication routes
 */

const passport = require('passport');
const Authentication = require('../controllers/authentication');

/* Note: These should be modified to be more modular as they
modify passport state for the entire app = magick */
require('../services/passport');
require('../config/baseConfig');

// const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.send({ message: 'HSSE API' });
  });

  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.get('/confirmuser/:token', Authentication.confirmUser);
  app.post('/forgotpassword', Authentication.sendPasswordResetEmail);
  app.post('/resetpassword/:token', Authentication.resetPassword);

  app.get('/currentuser', Authentication.currentUser);
  app.get('/fetchuserbyemail/:email', Authentication.fetchUserByEmail);
  app.get('/fetchallusers', Authentication.fetchAllUsers);

  app.post('/activateuser', Authentication.activateUser);
  app.post('/deactivateuser', Authentication.deactivateUser);

  app.post('/addrole', Authentication.addRole);
  app.post('/removerole', Authentication.removeRole);
  app.post('/updaterole', Authentication.updateRole);
};
