/**
 * @name SSEAssignedPresentationDetailsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the presentation details queue
 * and assigned to the current user.
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const SSEAssignedPresentationDetailsArticleQueueController = require('../../controllers/sse/SSEAssignedPresentationDetailsArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/assignedpresentationdetailsarticlequeue',
    requireAuth,
    SSEAssignedPresentationDetailsArticleQueueController.listArticles,
  );
  app.get(
    '/sse/assignedpresentationdetailsarticlequeue/fetcharticle/:articleId',
    requireAuth,
    SSEAssignedPresentationDetailsArticleQueueController.fetchArticle,
  );

  app.post(
    '/sse/assignedpresentationdetailsarticlequeue/savevalues/:articleId',
    requireAuth,
    SSEAssignedPresentationDetailsArticleQueueController.setPresentationDetailsValues,
  );
  // app.post(
  //   '/sse/assignedpresentationdetailsarticlequeue/setcompleted/:articleId',
  //   requireAuth,
  //   SSEAssignedPresentationDetailsArticleQueueController.setPresentationDetailsComplete
  // );
};
