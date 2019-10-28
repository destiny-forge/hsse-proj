/**
 * @name HSEArticleRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for HSE articles
 */

const passport = require('passport');

const HSEArticleController = require('../../controllers/hse/HSEArticleController');

const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  // app.get('/api/hsearticles', requireSignin, HSEArticleController.list);
  app.get('/hse/articles', HSEArticleController.list);
  app.get('/hse/article/:articleId', HSEArticleController.read);
  app.post('/hse/articles', HSEArticleController.create);
  app.post(
    '/hse/articles/addtocomplicatedqueue/:articleId',
    HSEArticleController.addToComplicatedQueue,
  );
  app.delete('/hse/articles/:articleId', HSEArticleController.delete);
};
