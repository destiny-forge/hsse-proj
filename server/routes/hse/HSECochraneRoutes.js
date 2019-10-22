/**
 * @name HSECochraneRoutes.js
 * @author Kwadwo Sakyi
 * @description TODO: unknown
 */

const passport = require('passport');

const HSECochrane = require('../../controllers/cochrane/HSECochraneController');
const requiresSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    //app.get('/hse/cochrane')
}
