/**
 * @name SSEAdministratorRoutes.js
 * @author Kwadwo Sakyi
 * @description Defines the routing paths for SSE Administrator section of application
 */

const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const SSEAdministratorController = require('../../controllers/administrator/HSEAdministratorController');

module.exports = app => {
    app.get('/administrator/sseadministratoreligibilityfilters', SSEAdministratorController.listArticles);
    app.get('/administrator/sseadministratorqualityappraisals', SSEAdministratorController.listArticles);
    app.get('/administrator/sseadministratorlinkingstudies', SSEAdministratorController.listArticles);
    app.get('/administrator/sseadministratorpresentationdetails', SSEAdministratorController.listArticles);

    app.get('/administrator/sseadministratorgolive', SSEAdministratorController.listArticles);
    app.get('/administrator/sseadministratortrackingprioritizing', SSEAdministratorController.listArticles);

    app.post('/administrator/sseeligibilityfilters/addjuniorfilterer', SSEAdministratorController.addJuniorEligibilityFilterer);
    app.post('/administrator/seeeligibilityfiltersarticlequeue/addalljuniorfilterer', SSEAdministratorController.addAllJuniorEligitibilityFilterer);
    app.post('/administrator/sse/pendingeligibilityfiltersarticlequeue/addseniorfilterer/:articleId', SSEAdministratorController.addArticleToSeniorEligibilityFilterer);
    app.post('/administrator/sse/pendingeligibilityfiltersarticlequeue/addallseniorfilterer', SSEAdministratorController.addAllArticlesToSeniorEligibilityFilterer);
}