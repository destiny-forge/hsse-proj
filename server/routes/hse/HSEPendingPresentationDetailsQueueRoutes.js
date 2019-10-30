/**
 * @name HSEPendingPresentationDetailsQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the presentation details queue
 * and are not assigned to any user.
 */

const HSEPendingPresentationDetailsQueueController = require('../../controllers/hse/HSEPendingPresentationDetailsQueueController');

module.exports = (app) => {
  app.get(
    '/hse/pendingpresentationdetailsqueue',
    HSEPendingPresentationDetailsQueueController.listArticles,
  );
  app.get(
    '/hse/pendingpresentationdetailsqueue/:id',
    HSEPendingPresentationDetailsQueueController.listArticle,
  );
};
