/**
 * @name HSEAssignedPresentationDetailsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the presentation details queue
 * and assigned to the current user.
 */

const HSEAssignedPresentationDetailsArticleQueueController = require('../../controllers/hse/HSEAssignedPresentationDetailsArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedpresentationdetailsarticlequeue', HSEAssignedPresentationDetailsArticleQueueController.listArticles);
    app.get('/hse/assignedpresentationdetailsarticlequeue/fetcharticle/:articleId', HSEAssignedPresentationDetailsArticleQueueController.fetchArticle);

    // app.post('/hse/assignedpresentationdetailsarticlequeue/savevalues/:articleId', HSEAssignedPresentationDetailsArticleQueueController.setPresentationValues);
    // app.post('/hse/assignedpresentationdetailsarticlequeue/setcompleted/:articleId', HSEAssignedPresentationDetailsArticleQueueController.setPresentationComplete);
}
