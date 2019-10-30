/**
 * @name SSEAssignedEligibilityFiltersArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the assigned eligibility and filters queue
 * and assigned to the current user.
 */

const auth = require('../../services/auth');
const SSEAssignedEligibilityFiltersArticleQueueController = require('../../controllers/sse/SSEAssignedEligibilityFiltersArticleQueueController');

module.exports = app => {
  app.get(
    '/sse/assignedeligibilityfiltersarticlequeue',
    auth.jwt,
    SSEAssignedEligibilityFiltersArticleQueueController.listArticles
  );
  app.get(
    '/sse/assignedeligibilityfiltersarticlequeue/fetcharticle/:articleId',
    auth.jwt,
    SSEAssignedEligibilityFiltersArticleQueueController.fetchArticle
  );

  app.post(
    '/sse/assignedeligibilityfiltersarticlequeue/savevalues/:articleId',
    auth.jwt,
    SSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterValues
  );
  app.post(
    '/sse/assignedeligibilityfiltersarticlequeue/setcompleted/:articleId',
    auth.jwt,
    SSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterComplete
  );
};
