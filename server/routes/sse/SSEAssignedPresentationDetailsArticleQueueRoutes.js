/**
 * @name SSEAssignedPresentationDetailsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the presentation details queue
 * and assigned to the current user.
 */

const auth = require('../../services/auth');
const SSEAssignedPresentationDetailsArticleQueueController = require('../../controllers/sse/SSEAssignedPresentationDetailsArticleQueueController');

module.exports = app => {
  app.get(
    '/sse/assignedpresentationdetailsarticlequeue',
    auth.jwt,
    SSEAssignedPresentationDetailsArticleQueueController.listArticles
  );
  app.get(
    '/sse/assignedpresentationdetailsarticlequeue/fetcharticle/:articleId',
    auth.jwt,
    SSEAssignedPresentationDetailsArticleQueueController.fetchArticle
  );

  app.post(
    '/sse/assignedpresentationdetailsarticlequeue/savevalues/:articleId',
    auth.jwt,
    SSEAssignedPresentationDetailsArticleQueueController.setPresentationDetailsValues
  );
  // app.post(
  //   '/sse/assignedpresentationdetailsarticlequeue/setcompleted/:articleId',
  //   auth.jwt,
  //   SSEAssignedPresentationDetailsArticleQueueController.setPresentationDetailsComplete
  // );
};
