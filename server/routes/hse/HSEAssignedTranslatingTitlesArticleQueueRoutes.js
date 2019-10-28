/**
 * @name HSEAssignedTranslatingTitlesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the translating titles queue
 * and assigned to the current user.
 */

const HSEAssignedTranslatingTitlesArticleQueueController = require('../../controllers/hse/HSEAssignedTranslatingTitlesArticleQueueController');

module.exports = (app) => {
  app.get(
    '/hse/assignedtranslatingtitlesarticlequeue',
    HSEAssignedTranslatingTitlesArticleQueueController.listArticles,
  );
  app.get(
    '/hse/assignedtranslatingtitlesarticlequeue/fetcharticle/:articleId',
    HSEAssignedTranslatingTitlesArticleQueueController.fetchArticle,
  );
};
