/**
 * @name SSEAssignedEligibilityFiltersArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the assigned eligibility and filters queue
 * and assigned to the current user.
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const SSEAssignedEligibilityFiltersArticleQueueController = require('../../controllers/sse/SSEAssignedEligibilityFiltersArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/assignedeligibilityfiltersarticlequeue',
    requireAuth,
    SSEAssignedEligibilityFiltersArticleQueueController.listArticles,
  );
  app.get(
    '/sse/assignedeligibilityfiltersarticlequeue/fetcharticle/:articleId',
    requireAuth,
    SSEAssignedEligibilityFiltersArticleQueueController.fetchArticle,
  );

  app.post(
    '/sse/assignedeligibilityfiltersarticlequeue/savevalues/:articleId',
    requireAuth,
    SSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterValues,
  );
  app.post(
    '/sse/assignedeligibilityfiltersarticlequeue/setcompleted/:articleId',
    requireAuth,
    SSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterComplete,
  );
};
