/**
 * @name HSEArticleRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for HSE articles
 */

const auth = require('../../services/auth');
const HSEArticleController = require('../../controllers/hse/HSEArticleController');

module.exports = app => {
  // app.get('/api/hsearticles', auth.jwt, HSEArticleController.list);
  app.get('/hse/articles', auth.jwt, HSEArticleController.list);
  app.get('/hse/article/:articleId', auth.jwt, HSEArticleController.read);
  app.post('/hse/articles', auth.jwt, HSEArticleController.create);
  app.post(
    '/hse/articles/addtocomplicatedqueue/:articleId',
    auth.jwt,
    HSEArticleController.addToComplicatedQueue
  );
  app.delete('/hse/articles/:articleId', auth.jwt, HSEArticleController.delete);
};
