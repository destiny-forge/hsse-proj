/**
 * @name SSEArticleRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for SSE articles
 */

const auth = require('../../services/auth');
const SSEArticleController = require('../../controllers/sse/SSEArticleController');

/* let's do this a better way */
require('../../config/baseConfig');

module.exports = app => {
  // app.get('/api/ssearticles', auth.jwt, SSEArticleController.list);
  app.get('/sse/articles', auth.jwt, SSEArticleController.list);
  app.get('/sse/article/:articleId', auth.jwt, SSEArticleController.read);
  app.post('/sse/articles', auth.jwt, SSEArticleController.create);
  app.post(
    '/sse/articles/addtocomplicatedqueue/:articleId',
    auth.jwt,
    SSEArticleController.addToComplicatedQueue
  );
  app.delete('/sse/articles/:articleId', auth.jwt, SSEArticleController.delete);
};
