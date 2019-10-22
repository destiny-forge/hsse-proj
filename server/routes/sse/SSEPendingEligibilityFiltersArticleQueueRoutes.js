/**
 * @name SSEPendingEligibilityFiltersArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the eligibility and filters queue
 * and are not assigned to any user.
 */

const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const SSEEligibilityFilterArticleQueueController = require('../../controllers/sse/SSEPendingEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/sse/pendingeligibilityfiltersarticlequeue', SSEEligibilityFilterArticleQueueController.listArticles);
    app.get('/sse/pendingeligibilityfiltersarticlequeue/fetcharticle/:id', SSEEligibilityFilterArticleQueueController.listArticle);
    app.post('/sse/pendingeligibilityfiltersarticlequeue/addjuniorfilterer/:articleId', SSEEligibilityFilterArticleQueueController.addArticleToJuniorEligibilityFilterer);
    app.post('/sse/pendingeligibilityfiltersarticlequeue/addalljuniorfilterer', SSEEligibilityFilterArticleQueueController.addAllArticlesToJuniorEligibilityFilterer);
    app.post('/sse/pendingeligibilityfiltersarticlequeue/addseniorfilterer/:articleId', SSEEligibilityFilterArticleQueueController.addArticleToSeniorEligibilityFilterer);
    app.post('/sse/pendingeligibilityfiltersarticlequeue/addallseniorfilterer', SSEEligibilityFilterArticleQueueController.addAllArticlesToSeniorEligibilityFilterer);
}
