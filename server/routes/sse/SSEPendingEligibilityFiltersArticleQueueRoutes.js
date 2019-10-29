/**
 * @name SSEPendingEligibilityFiltersArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the eligibility and filters queue
 * and are not assigned to any user.
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const SSEEligibilityFilterArticleQueueController = require('../../controllers/sse/SSEPendingEligibilityFiltersArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/pendingeligibilityfiltersarticlequeue',
    requireAuth,
    SSEEligibilityFilterArticleQueueController.listArticles,
  );
  app.get(
    '/sse/pendingeligibilityfiltersarticlequeue/fetcharticle/:id',
    requireAuth,
    SSEEligibilityFilterArticleQueueController.listArticle,
  );
  app.post(
    '/sse/pendingeligibilityfiltersarticlequeue/addjuniorfilterer/:articleId',
    requireAuth,
    SSEEligibilityFilterArticleQueueController.addArticleToJuniorEligibilityFilterer,
  );
  app.post(
    '/sse/pendingeligibilityfiltersarticlequeue/addalljuniorfilterer',
    requireAuth,
    SSEEligibilityFilterArticleQueueController.addAllArticlesToJuniorEligibilityFilterer,
  );
  app.post(
    '/sse/pendingeligibilityfiltersarticlequeue/addseniorfilterer/:articleId',
    requireAuth,
    SSEEligibilityFilterArticleQueueController.addArticleToSeniorEligibilityFilterer,
  );
  app.post(
    '/sse/pendingeligibilityfiltersarticlequeue/addallseniorfilterer',
    requireAuth,
    SSEEligibilityFilterArticleQueueController.addAllArticlesToSeniorEligibilityFilterer,
  );
};
