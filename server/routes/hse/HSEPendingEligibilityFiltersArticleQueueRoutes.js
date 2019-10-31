/**
 * @name HSEPendingEligibilityFiltersArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the eligibility and filters queue
 * and are not assigned to any user.
 */

const auth = require('../../services/auth');
const HSEEligibilityFilterArticleQueueController = require('../../controllers/hse/HSEPendingEligibilityFiltersArticleQueueController');

module.exports = app => {
  app.get(
    '/hse/pendingeligibilityfiltersarticlequeue',
    auth.jwt,
    HSEEligibilityFilterArticleQueueController.listArticles
  );
  app.get(
    '/hse/pendingeligibilityfiltersarticlequeue/fetcharticle/:id',
    auth.jwt,
    HSEEligibilityFilterArticleQueueController.listArticle
  );
  app.post(
    '/hse/pendingeligibilityfiltersarticlequeue/addjuniorfilterer/:articleId',
    auth.jwt,
    HSEEligibilityFilterArticleQueueController.addArticleToJuniorEligibilityFilterer
  );
  app.post(
    '/hse/pendingeligibilityfiltersarticlequeue/addalljuniorfilterer',
    auth.jwt,
    HSEEligibilityFilterArticleQueueController.addAllArticlesToJuniorEligibilityFilterer
  );
  app.post(
    '/hse/pendingeligibilityfiltersarticlequeue/addseniorfilterer/:articleId',
    auth.jwt,
    HSEEligibilityFilterArticleQueueController.addArticleToSeniorEligibilityFilterer
  );
  app.post(
    '/hse/pendingeligibilityfiltersarticlequeue/addallseniorfilterer',
    auth.jwt,
    HSEEligibilityFilterArticleQueueController.addAllArticlesToSeniorEligibilityFilterer
  );
};
