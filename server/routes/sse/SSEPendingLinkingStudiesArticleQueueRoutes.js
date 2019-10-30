/**
 * @name SSEPendingLinkingStudiesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the linking studies queue
 * and are not assigned to any user.
 */

const auth = require('../../services/auth');
const SSEPendingLinkingStudiesArticleQueueController = require('../../controllers/sse/SSEPendingLinkingStudiesArticleQueueController');

module.exports = app => {
  app.get(
    '/sse/pendinglinkingstudiesarticlequeue',
    auth.jwt,
    SSEPendingLinkingStudiesArticleQueueController.listArticles
  );
  app.get(
    '/sse/pendinglinkingstudiesarticlequeue/fetcharticle/:id',
    auth.jwt,
    SSEPendingLinkingStudiesArticleQueueController.listArticle
  );
  app.post(
    '/sse/pendinglinkingstudiesarticlequeue/addjuniorlinker/:articleId',
    auth.jwt,
    SSEPendingLinkingStudiesArticleQueueController.addArticleToJuniorLinker
  );
};
