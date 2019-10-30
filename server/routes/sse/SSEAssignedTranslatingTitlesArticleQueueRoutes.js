/**
 * @name SSEAssignedTranslatingTitlesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the translating titles queue
 * and assigned to the current user.
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const SSEAssignedTranslatingTitlesArticleQueueController = require('../../controllers/sse/SSEAssignedTranslatingTitlesArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/assignedtranslatingtitlesarticlequeue',
    requireAuth,
    SSEAssignedTranslatingTitlesArticleQueueController.listArticles,
  );
  app.get(
    '/sse/assignedtranslatingtitlesarticlequeue/fetcharticle/:articleId',
    requireAuth,
    SSEAssignedTranslatingTitlesArticleQueueController.fetchArticle,
  );
};
