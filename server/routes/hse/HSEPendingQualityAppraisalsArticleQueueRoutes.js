/**
 * @name HSEPendingQualityAppraisalsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the quality appraisal queue
 * and are not assigned to any user.
 */

const auth = require('../../services/auth');
const HSEPendingQualityAppraisalsArticleQueueController = require('../../controllers/hse/HSEPendingQualityAppraisalsArticleQueueController');

module.exports = app => {
  app.get(
    '/hse/pendingqualityappraisalsarticlequeue',
    auth.jwt,
    HSEPendingQualityAppraisalsArticleQueueController.listArticles
  );
  app.get(
    '/hse/pendingqualityappraisalsarticlequeue/fetcharticle/:id',
    HSEPendingQualityAppraisalsArticleQueueController.listArticle
  );
  app.post(
    '/hse/pendingqualityappraisalsarticlequeue/addjuniorappraiser/:articleId',
    HSEPendingQualityAppraisalsArticleQueueController.addArticleToJuniorQualityAppraiser
  );
  app.post(
    '/hse/pendingqualityappraisalsarticlequeue/addseniorappraiser/:articleId',
    HSEPendingQualityAppraisalsArticleQueueController.addArticleToSeniorQualityAppraiser
  );
};
