/**
 * @name SSEPendingQualityAppraisalsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the quality appraisal queue
 * and are not assigned to any user.
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const SSEPendingQualityAppraisalsArticleQueueController = require('../../controllers/sse/SSEPendingQualityAppraisalsArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/pendingqualityappraisalsarticlequeue',
    requireAuth,
    SSEPendingQualityAppraisalsArticleQueueController.listArticles,
  );
  app.get(
    '/sse/pendingqualityappraisalsarticlequeue/fetcharticle/:id',
    requireAuth,
    SSEPendingQualityAppraisalsArticleQueueController.listArticle,
  );
  app.post(
    '/sse/pendingqualityappraisalsarticlequeue/addjuniorappraiser/:articleId',
    requireAuth,
    SSEPendingQualityAppraisalsArticleQueueController.addArticleToJuniorQualityAppraiser,
  );
  app.post(
    '/sse/pendingqualityappraisalsarticlequeue/addseniorappraiser/:articleId',
    requireAuth,
    SSEPendingQualityAppraisalsArticleQueueController.addArticleToSeniorQualityAppraiser,
  );
};
