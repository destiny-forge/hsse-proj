/**
 * @name SSEAssignedQualityAppraisalsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the quality appraisal queue
 * and assigned to the current user.
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const SSEAssignedQualityAppraisalsArticleQueueController = require('../../controllers/sse/SSEAssignedQualityAppraisalsArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/assignedqualityappraisalsarticlequeue',
    requireAuth,
    SSEAssignedQualityAppraisalsArticleQueueController.listArticles,
  );

  app.get(
    '/sse/assignedqualityappraisalsarticle/fetcharticle/:articleId',
    requireAuth,
    SSEAssignedQualityAppraisalsArticleQueueController.fetchArticle,
  );

  app.post(
    '/sse/assignedqualityappraisalsarticlequeue/savevalues/:articleId',
    requireAuth,
    SSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalValues,
  );

  // app.post(
  //   '/sse/assignedqualityappraisalarticlequeue/setcompleted/:articleId',
  //   requireAuth,
  //   SSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalComplete
  // );
};
