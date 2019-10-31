/**
 * @name SSEAssignedQualityAppraisalsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the quality appraisal queue
 * and assigned to the current user.
 */

const auth = require('../../services/auth');
const SSEAssignedQualityAppraisalsArticleQueueController = require('../../controllers/sse/SSEAssignedQualityAppraisalsArticleQueueController');

module.exports = app => {
  app.get(
    '/sse/assignedqualityappraisalsarticlequeue',
    auth.jwt,
    SSEAssignedQualityAppraisalsArticleQueueController.listArticles
  );

  app.get(
    '/sse/assignedqualityappraisalsarticle/fetcharticle/:articleId',
    auth.jwt,
    SSEAssignedQualityAppraisalsArticleQueueController.fetchArticle
  );

  app.post(
    '/sse/assignedqualityappraisalsarticlequeue/savevalues/:articleId',
    auth.jwt,
    SSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalValues
  );

  // app.post(
  //   '/sse/assignedqualityappraisalarticlequeue/setcompleted/:articleId',
  //   auth.jwt,
  //   SSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalComplete
  // );
};
