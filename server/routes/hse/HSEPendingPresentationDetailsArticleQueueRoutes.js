/**
 * @name HSEPendingPresentationDetailsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the presentation details queue
 * and are not assigned to any user.
 */

const HSEPendingPresentationDetailsArticleQueueController = require('../../controllers/hse/HSEPendingPresentationDetailsQueueController');

module.exports = app => {
    app.get('/hse/pendingpresentationdetailsarticlequeue', HSEPendingPresentationDetailsArticleQueueController.listArticles);
    app.get('/hse/pendingpresentationdetailsarticlequeue/:id', HSEPendingPresentationDetailsArticleQueueController.listArticle);
    app.post('/hse/pendingpresentationdetailsarticlequeue/addjuniordetailer/:articleId', HSEPendingPresentationDetailsArticleQueueController.addArticleToJuniorPresentationDetailer);
}
