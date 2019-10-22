/**
 * @name HSEPendingLinkingStudiesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the linking studies queue
 * and are not assigned to any user.
 */

const HSEPendingLinkingStudiesArticleQueueController = require('../../controllers/hse/HSEPendingLinkingStudiesArticleQueueController');

module.exports = app => {
    app.get('/hse/pendinglinkingstudiesarticlequeue', HSEPendingLinkingStudiesArticleQueueController.listArticles);
    app.get('/hse/pendinglinkingstudiesarticlequeue/:id', HSEPendingLinkingStudiesArticleQueueController.listArticle);
    app.post('/hse/pendinglinkingstudiesarticlequeue/addjuniorlinker/:articleId', HSEPendingLinkingStudiesArticleQueueController.addArticleToJuniorLinker);
}
