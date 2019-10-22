/**
 * @name SSEPendingTranslatingTitlesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the translating titles queue
 * and are not assigned to any user.
 */

const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const SSEPendingTranslatingTitlesArticleQueueController = require('../../controllers/sse/SSEPendingTranslatingTitlesArticleQueueController');

module.exports = app => {
    app.get('/sse/pendingtranslatingtitlesarticlequeue', SSEPendingTranslatingTitlesArticleQueueController.listArticles);
    app.get('/sse/pendingtranslatingtitlesarticlequeue/fetcharticle/:id', SSEPendingTranslatingTitlesArticleQueueController.listArticle);
    app.post('/sse/pendingtranslatingtitlesarticlequeue/addjuniordetailer/:articleId', SSEPendingTranslatingTitlesArticleQueueController.addArticleToJuniorTranslatingTitlesTranslator);
}
