/**
 * @name SSEArticleBatchfileRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for SSE article batch files
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const SSEArticleBatchfileController = require('../../controllers/sse/SSEArticleBatchfileController');

module.exports = (app) => {
  // app.get('/api/hse/batchfile', requireAuth, HSEBatchfileController.list);
  app.get('/sse/articlebatchfiles', requireAuth, SSEArticleBatchfileController.list);
  app.get('/sse/articlebatchfiles/:batchfileId', requireAuth, SSEArticleBatchfileController.read);
  app.post('/sse/articlebatchfiles', requireAuth, SSEArticleBatchfileController.create);
  // app.delete('/sse/articlebatchfile/:batchfileId', requireAuth, SSEArticleBatchfileController.delete);
};
