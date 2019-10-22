/**
 * @name HSEPendingEligibilityFiltersArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the eligibility and filters queue
 * and are not assigned to any user.
 */

const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const HSEEligibilityFilterArticleQueueController = require('../../controllers/hse/HSEPendingEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/hse/pendingeligibilityfiltersarticlequeue', HSEEligibilityFilterArticleQueueController.listArticles);
    app.get('/hse/pendingeligibilityfiltersarticlequeue/fetcharticle/:id', HSEEligibilityFilterArticleQueueController.listArticle);
    app.post('/hse/pendingeligibilityfiltersarticlequeue/addjuniorfilterer/:articleId', HSEEligibilityFilterArticleQueueController.addArticleToJuniorEligibilityFilterer);
    app.post('/hse/pendingeligibilityfiltersarticlequeue/addalljuniorfilterer', HSEEligibilityFilterArticleQueueController.addAllArticlesToJuniorEligibilityFilterer);
    app.post('/hse/pendingeligibilityfiltersarticlequeue/addseniorfilterer/:articleId', HSEEligibilityFilterArticleQueueController.addArticleToSeniorEligibilityFilterer);
    app.post('/hse/pendingeligibilityfiltersarticlequeue/addallseniorfilterer', HSEEligibilityFilterArticleQueueController.addAllArticlesToSeniorEligibilityFilterer);
}
