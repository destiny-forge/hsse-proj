/**
 * @name SSEAdministratorRoutes.js
 * @author Kwadwo Sakyi
 * @description Defines the routing paths for SSE Administrator section of application
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const SSEAdministratorController = require('../../controllers/administrator/HSEAdministratorController');

module.exports = (app) => {
  app.get(
    '/administrator/sseadministratoreligibilityfilters',
    requireAuth,
    SSEAdministratorController.listArticles,
  );
  app.get(
    '/administrator/sseadministratorqualityappraisals',
    requireAuth,
    SSEAdministratorController.listArticles,
  );
  app.get(
    '/administrator/sseadministratorlinkingstudies',
    requireAuth,
    SSEAdministratorController.listArticles,
  );
  app.get(
    '/administrator/sseadministratorpresentationdetails',
    requireAuth,
    SSEAdministratorController.listArticles,
  );

  app.get(
    '/administrator/sseadministratorgolive',
    requireAuth,
    SSEAdministratorController.listArticles,
  );
  app.get(
    '/administrator/sseadministratortrackingprioritizing',
    requireAuth,
    SSEAdministratorController.listArticles,
  );

  app.post(
    '/administrator/sseeligibilityfilters/addjuniorfilterer',
    requireAuth,
    SSEAdministratorController.addJuniorEligibilityFilterer,
  );
  app.post(
    '/administrator/seeeligibilityfiltersarticlequeue/addalljuniorfilterer',
    requireAuth,
    SSEAdministratorController.addAllJuniorEligitibilityFilterer,
  );
  app.post(
    '/administrator/sse/pendingeligibilityfiltersarticlequeue/addseniorfilterer/:articleId',
    requireAuth,
    SSEAdministratorController.addArticleToSeniorEligibilityFilterer,
  );
  app.post(
    '/administrator/sse/pendingeligibilityfiltersarticlequeue/addallseniorfilterer',
    requireAuth,
    SSEAdministratorController.addAllArticlesToSeniorEligibilityFilterer,
  );
};
