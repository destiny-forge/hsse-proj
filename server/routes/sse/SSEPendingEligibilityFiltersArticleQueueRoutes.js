/**
 * @name SSEPendingEligibilityFiltersArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the eligibility and filters queue
 * and are not assigned to any user.
 */

const auth = require('../../services/auth');
const SSEEligibilityFilterArticleQueueController = require('../../controllers/sse/SSEPendingEligibilityFiltersArticleQueueController');

module.exports = app => {
  app.get(
    '/sse/pendingeligibilityfiltersarticlequeue',
    auth.jwt,
    SSEEligibilityFilterArticleQueueController.listArticles
  );
  app.get(
    '/sse/pendingeligibilityfiltersarticlequeue/fetcharticle/:id',
    auth.jwt,
    SSEEligibilityFilterArticleQueueController.listArticle
  );
  app.post(
    '/sse/pendingeligibilityfiltersarticlequeue/addjuniorfilterer/:articleId',
    auth.jwt,
    SSEEligibilityFilterArticleQueueController.addArticleToJuniorEligibilityFilterer
  );
  app.post(
    '/sse/pendingeligibilityfiltersarticlequeue/addalljuniorfilterer',
    auth.jwt,
    SSEEligibilityFilterArticleQueueController.addAllArticlesToJuniorEligibilityFilterer
  );
  app.post(
    '/sse/pendingeligibilityfiltersarticlequeue/addseniorfilterer/:articleId',
    auth.jwt,
    SSEEligibilityFilterArticleQueueController.addArticleToSeniorEligibilityFilterer
  );
  app.post(
    '/sse/pendingeligibilityfiltersarticlequeue/addallseniorfilterer',
    auth.jwt,
    SSEEligibilityFilterArticleQueueController.addAllArticlesToSeniorEligibilityFilterer
  );
};
