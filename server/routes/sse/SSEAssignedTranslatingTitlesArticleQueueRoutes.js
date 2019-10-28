/**
 * @name SSEAssignedTranslatingTitlesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the translating titles queue
 * and assigned to the current user.
 */

const SSEAssignedTranslatingTitlesArticleQueueController = require('../../controllers/sse/SSEAssignedTranslatingTitlesArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/assignedtranslatingtitlesarticlequeue',
    SSEAssignedTranslatingTitlesArticleQueueController.listArticles,
  );
  app.get(
    '/sse/assignedtranslatingtitlesarticlequeue/fetcharticle/:articleId',
    SSEAssignedTranslatingTitlesArticleQueueController.fetchArticle,
  );
};
