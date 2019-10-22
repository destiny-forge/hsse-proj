/**
 * @name HSEAssignedEligibilityFiltersArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the assigned eligibility and filters queue
 * and assigned to the current user.
 */

const HSEAssignedEligibilityFiltersArticleQueueController = require('../../controllers/hse/HSEAssignedEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedeligibilityfiltersarticlequeue', HSEAssignedEligibilityFiltersArticleQueueController.listArticles);
    app.get('/hse/assignedeligibilityfiltersarticlequeue/fetcharticle/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.fetchArticle);

    app.post('/hse/assignedeligibilityfiltersarticlequeue/savevalues/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFiltersValues);
    app.post('/hse/assignedeligibilityfiltersarticlequeue/setcompleted/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.setFullEligibilityFiltersCompleteOrResolve);

    app.post('/hse/assignedeligibilityfiltersarticlequeue/removejuniorfilterer/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.removeArticleFromJuniorEligibilityFilterer);
    app.post('/hse/assignedeligibilityfiltersarticlequeue/removealljuniorfilterer', HSEAssignedEligibilityFiltersArticleQueueController.removeAllArticlesFromJuniorEligibilityFilterer);

    app.post('/hse/assignedeligibilityfiltersarticlequeue/removeseniorfilterer/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.removeArticleFromSeniorEligibilityFilterer);
    app.post('/hse/assignedeligibilityfiltersarticlequeue/removeallseniorfilterer', HSEAssignedEligibilityFiltersArticleQueueController.removeAllArticlesFromSeniorEligibilityFilterer);
}
