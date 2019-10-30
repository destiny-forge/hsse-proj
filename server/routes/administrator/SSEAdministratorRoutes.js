/**
 * @name SSEAdministratorRoutes.js
 * @author Kwadwo Sakyi
 * @description Defines the routing paths for SSE Administrator section of application
 */

const auth = require('../../services/auth');
const SSEAdministratorController = require('../../controllers/administrator/HSEAdministratorController');

module.exports = app => {
  app.get(
    '/administrator/sseadministratoreligibilityfilters',
    auth.jwt,
    SSEAdministratorController.listArticles
  );
  app.get(
    '/administrator/sseadministratorqualityappraisals',
    auth.jwt,
    SSEAdministratorController.listArticles
  );
  app.get(
    '/administrator/sseadministratorlinkingstudies',
    auth.jwt,
    SSEAdministratorController.listArticles
  );
  app.get(
    '/administrator/sseadministratorpresentationdetails',
    auth.jwt,
    SSEAdministratorController.listArticles
  );

  app.get(
    '/administrator/sseadministratorgolive',
    auth.jwt,
    SSEAdministratorController.listArticles
  );
  app.get(
    '/administrator/sseadministratortrackingprioritizing',
    auth.jwt,
    SSEAdministratorController.listArticles
  );

  app.post(
    '/administrator/sseeligibilityfilters/addjuniorfilterer',
    auth.jwt,
    SSEAdministratorController.addJuniorEligibilityFilterer
  );
  app.post(
    '/administrator/seeeligibilityfiltersarticlequeue/addalljuniorfilterer',
    auth.jwt,
    SSEAdministratorController.addAllJuniorEligitibilityFilterer
  );
  app.post(
    '/administrator/sse/pendingeligibilityfiltersarticlequeue/addseniorfilterer/:articleId',
    auth.jwt,
    SSEAdministratorController.addArticleToSeniorEligibilityFilterer
  );
  app.post(
    '/administrator/sse/pendingeligibilityfiltersarticlequeue/addallseniorfilterer',
    auth.jwt,
    SSEAdministratorController.addAllArticlesToSeniorEligibilityFilterer
  );
};
