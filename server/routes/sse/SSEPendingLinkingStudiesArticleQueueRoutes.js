/**
 * @name SSEPendingLinkingStudiesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the linking studies queue
 * and are not assigned to any user.
 */

const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const SSEPendingLinkingStudiesArticleQueueController = require('../../controllers/sse/SSEPendingLinkingStudiesArticleQueueController');

module.exports = app => {
    app.get('/sse/pendinglinkingstudiesarticlequeue', SSEPendingLinkingStudiesArticleQueueController.listArticles);
    app.get('/sse/pendinglinkingstudiesarticlequeue/fetcharticle/:id', SSEPendingLinkingStudiesArticleQueueController.listArticle);
    app.post('/sse/pendinglinkingstudiesarticlequeue/addjuniorlinker/:articleId', SSEPendingLinkingStudiesArticleQueueController.addArticleToJuniorLinker
    );
}
