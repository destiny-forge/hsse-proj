/**
 * @name HSECochraneRoutes.js
 * @author Kwadwo Sakyi
 * @description TODO: unknown
 */

const passport = require('passport');

const requiresAuth = passport.authenticate('jwt', { session: false });

// const HSECochrane = require('../../controllers/cochrane/HSECochraneController');

module.exports = (app) => {
  app.get('/hse/cochrane', requiresAuth, () => {});
};
