/**
 * @name HSECochraneRoutes.js
 * @author Kwadwo Sakyi
 * @description TODO: unknown
 */

const auth = require('../../services/auth');

// const HSECochrane = require('../../controllers/cochrane/HSECochraneController');

module.exports = app => {
  app.get('/hse/cochrane', auth.jwt, () => {});
};
