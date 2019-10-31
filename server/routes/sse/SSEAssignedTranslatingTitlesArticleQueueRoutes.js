/**
 * @name SSEAssignedTranslatingTitlesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the translating titles queue
 * and assigned to the current user.
 */

const auth = require('../../services/auth');
const SSEAssignedTranslatingTitlesArticleQueueController = require('../../controllers/sse/SSEAssignedTranslatingTitlesArticleQueueController');

module.exports = app => {
  app.get(
    '/sse/assignedtranslatingtitlesarticlequeue',
    auth.jwt,
    SSEAssignedTranslatingTitlesArticleQueueController.listArticles
  );
  app.get(
    '/sse/assignedtranslatingtitlesarticlequeue/fetcharticle/:articleId',
    auth.jwt,
    SSEAssignedTranslatingTitlesArticleQueueController.fetchArticle
  );
};
