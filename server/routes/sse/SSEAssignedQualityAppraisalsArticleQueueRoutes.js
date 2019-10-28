/**
 * @name SSEAssignedQualityAppraisalsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the quality appraisal queue
 * and assigned to the current user.
 */

const SSEAssignedQualityAppraisalsArticleQueueController = require('../../controllers/sse/SSEAssignedQualityAppraisalsArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/assignedqualityappraisalsarticlequeue',
    SSEAssignedQualityAppraisalsArticleQueueController.listArticles,
  );
  app.get(
    '/sse/assignedqualityappraisalsarticle/fetcharticle/:articleId',
    SSEAssignedQualityAppraisalsArticleQueueController.fetchArticle,
  );

  app.post(
    '/sse/assignedqualityappraisalsarticlequeue/savevalues/:articleId',
    SSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalValues,
  );
  // app.post('/sse/assignedqualityappraisalarticlequeue/setcompleted/:articleId', SSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalComplete);
};
