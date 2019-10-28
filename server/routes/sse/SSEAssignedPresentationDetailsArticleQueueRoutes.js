/**
 * @name SSEAssignedPresentationDetailsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the presentation details queue
 * and assigned to the current user.
 */

const SSEAssignedPresentationDetailsArticleQueueController = require('../../controllers/sse/SSEAssignedPresentationDetailsArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/assignedpresentationdetailsarticlequeue',
    SSEAssignedPresentationDetailsArticleQueueController.listArticles,
  );
  app.get(
    '/sse/assignedpresentationdetailsarticlequeue/fetcharticle/:articleId',
    SSEAssignedPresentationDetailsArticleQueueController.fetchArticle,
  );

  app.post(
    '/sse/assignedpresentationdetailsarticlequeue/savevalues/:articleId',
    SSEAssignedPresentationDetailsArticleQueueController.setPresentationDetailsValues,
  );
  // app.post('/sse/assignedpresentationdetailsarticlequeue/setcompleted/:articleId', SSEAssignedPresentationDetailsArticleQueueController.setPresentationDetailsComplete);
};
