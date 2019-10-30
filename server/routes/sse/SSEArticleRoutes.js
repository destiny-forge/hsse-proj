/**
 * @name SSEArticleRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for SSE articles
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const SSEArticleController = require('../../controllers/sse/SSEArticleController');

/* let's do this a better way */
require('../../config/baseConfig');

module.exports = (app) => {
  // app.get('/api/ssearticles', requireAuth, SSEArticleController.list);
  app.get('/sse/articles', requireAuth, SSEArticleController.list);
  app.get('/sse/article/:articleId', requireAuth, SSEArticleController.read);
  app.post('/sse/articles', requireAuth, SSEArticleController.create);
  app.post(
    '/sse/articles/addtocomplicatedqueue/:articleId',
    requireAuth,
    SSEArticleController.addToComplicatedQueue,
  );
  app.delete('/sse/articles/:articleId', requireAuth, SSEArticleController.delete);
};
