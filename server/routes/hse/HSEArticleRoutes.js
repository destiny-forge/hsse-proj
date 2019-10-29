/**
 * @name HSEArticleRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for HSE articles
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const HSEArticleController = require('../../controllers/hse/HSEArticleController');

module.exports = (app) => {
  // app.get('/api/hsearticles', requireAuth, HSEArticleController.list);
  app.get('/hse/articles', requireAuth, HSEArticleController.list);
  app.get('/hse/article/:articleId', requireAuth, HSEArticleController.read);
  app.post('/hse/articles', requireAuth, HSEArticleController.create);
  app.post(
    '/hse/articles/addtocomplicatedqueue/:articleId',
    requireAuth,
    HSEArticleController.addToComplicatedQueue,
  );
  app.delete('/hse/articles/:articleId', requireAuth, HSEArticleController.delete);
};
