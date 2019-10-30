/**
 * @name SSEPendingTranslatingTitlesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the translating titles queue
 * and are not assigned to any user.
 */

const auth = require('../../services/auth');
const SSEPendingTranslatingTitlesArticleQueueController = require('../../controllers/sse/SSEPendingTranslatingTitlesArticleQueueController');

module.exports = app => {
  app.get(
    '/sse/pendingtranslatingtitlesarticlequeue',
    auth.jwt,
    SSEPendingTranslatingTitlesArticleQueueController.listArticles
  );
  app.get(
    '/sse/pendingtranslatingtitlesarticlequeue/fetcharticle/:id',
    auth.jwt,
    SSEPendingTranslatingTitlesArticleQueueController.listArticle
  );
  app.post(
    '/sse/pendingtranslatingtitlesarticlequeue/addjuniordetailer/:articleId',
    auth.jwt,
    SSEPendingTranslatingTitlesArticleQueueController.addArticleToJuniorTranslatingTitlesTranslator
  );
};
