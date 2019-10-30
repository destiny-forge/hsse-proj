/**
 * @name SSEPendingPresentationDetailsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the presentation details queue
 * and are not assigned to any user.
 */

const auth = require('../../services/auth');
const SSEPendingPresentationDetailsArticleQueueController = require('../../controllers/sse/SSEPendingPresentationDetailsArticleQueueController');

module.exports = app => {
  app.get(
    '/sse/pendingpresentationdetailsarticlequeue',
    auth.jwt,
    SSEPendingPresentationDetailsArticleQueueController.listArticles
  );
  app.get(
    '/sse/pendingpresentationdetailsarticlequeue/fetcharticle/:id',
    auth.jwt,
    SSEPendingPresentationDetailsArticleQueueController.listArticle
  );
  app.post(
    '/sse/pendingpresentationdetailsarticlequeue/addjuniordetailer/:articleId',
    auth.jwt,
    SSEPendingPresentationDetailsArticleQueueController.addArticleToJuniorPresentationDetailer
  );
};
