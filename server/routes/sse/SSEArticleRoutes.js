/**
 * @name SSEArticleRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for SSE articles
 */

const passport = require('passport');

const SSEArticleController = require('../../controllers/sse/SSEArticleController');

const requireSignin = passport.authenticate('local', { session: false });

const config = require('../../config/baseConfig');

module.exports = (app) => {
  // app.get('/api/ssearticles', requireSignin, SSEArticleController.list);
  app.get('/sse/articles', SSEArticleController.list);
  app.get('/sse/article/:articleId', SSEArticleController.read);
  app.post('/sse/articles', SSEArticleController.create);
  app.post(
    '/sse/articles/addtocomplicatedqueue/:articleId',
    SSEArticleController.addToComplicatedQueue,
  );
  app.delete('/sse/articles/:articleId', SSEArticleController.delete);
};
