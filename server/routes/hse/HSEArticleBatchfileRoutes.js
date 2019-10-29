/**
 * @name HSEArticleBatchfileRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for HSE article batch files
 */

const passport = require('passport');
const HSEArticleBatchfileController = require('../../controllers/hse/HSEArticleBatchfileController');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
  // app.get('/api/hse/batchfile', requireAuth, HSEBatchfileController.list);
  app.get('/hse/articlebatchfiles', requireAuth, HSEArticleBatchfileController.list);

  app.get('/hse/articlebatchfiles/:batchfileId', requireAuth, HSEArticleBatchfileController.read);

  app.post('/hse/articlebatchfiles', requireAuth, HSEArticleBatchfileController.create);
  // app.delete('/hse/articlebatchfile/:batchfileId', HSEArticleBatchfileController.delete);
};
