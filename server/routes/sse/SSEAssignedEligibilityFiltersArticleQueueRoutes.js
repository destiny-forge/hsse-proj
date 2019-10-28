/**
 * @name SSEAssignedEligibilityFiltersArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the assigned eligibility and filters queue
 * and assigned to the current user.
 */

const SSEAssignedEligibilityFiltersArticleQueueController = require('../../controllers/sse/SSEAssignedEligibilityFiltersArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/assignedeligibilityfiltersarticlequeue',
    SSEAssignedEligibilityFiltersArticleQueueController.listArticles,
  );
  app.get(
    '/sse/assignedeligibilityfiltersarticlequeue/fetcharticle/:articleId',
    SSEAssignedEligibilityFiltersArticleQueueController.fetchArticle,
  );

  app.post(
    '/sse/assignedeligibilityfiltersarticlequeue/savevalues/:articleId',
    SSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterValues,
  );
  app.post(
    '/sse/assignedeligibilityfiltersarticlequeue/setcompleted/:articleId',
    SSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterComplete,
  );
};
