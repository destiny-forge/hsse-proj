/**
 * @name SSEPendingQualityAppraisalsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the quality appraisal queue
 * and are not assigned to any user.
 */

const auth = require('../../services/auth');
const SSEPendingQualityAppraisalsArticleQueueController = require('../../controllers/sse/SSEPendingQualityAppraisalsArticleQueueController');

module.exports = app => {
  app.get(
    '/sse/pendingqualityappraisalsarticlequeue',
    auth.jwt,
    SSEPendingQualityAppraisalsArticleQueueController.listArticles
  );
  app.get(
    '/sse/pendingqualityappraisalsarticlequeue/fetcharticle/:id',
    auth.jwt,
    SSEPendingQualityAppraisalsArticleQueueController.listArticle
  );
  app.post(
    '/sse/pendingqualityappraisalsarticlequeue/addjuniorappraiser/:articleId',
    auth.jwt,
    SSEPendingQualityAppraisalsArticleQueueController.addArticleToJuniorQualityAppraiser
  );
  app.post(
    '/sse/pendingqualityappraisalsarticlequeue/addseniorappraiser/:articleId',
    auth.jwt,
    SSEPendingQualityAppraisalsArticleQueueController.addArticleToSeniorQualityAppraiser
  );
};
