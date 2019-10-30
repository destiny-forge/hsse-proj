/**
 * @name authRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all authentication routes
 */

const Authentication = require('../controllers/authentication');
const auth = require('../services/auth');

module.exports = app => {
  app.get('/', (req, res, next) => {
    res.send({ message: 'HSSE API' });
  });

  app.post('/signin', auth.local, Authentication.signin);
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
