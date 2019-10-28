/**
 * @name HSEAssignedLinkingStudiesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the linkning studies queue
 * and assigned to the current user.
 */

const HSEAssignedLinkingStudiesArticleQueueController = require('../../controllers/hse/HSEAssignedLinkingStudiesArticleQueueController');

module.exports = (app) => {
  app.get(
    '/hse/assignedlinkingstudiesarticlequeue',
    HSEAssignedLinkingStudiesArticleQueueController.listArticles,
  );
  app.get(
    '/hse/assignedlinkingstudiesarticlequeue/fetcharticle/:articleId',
    HSEAssignedLinkingStudiesArticleQueueController.fetchArticle,
  );

  // app.post('/hse/assignedlinkingstudiesarticlequeue/savevalues/:articleId', HSEAssignedLinkingStudiesArticleQueueController.setLinkingStudiesValues);
  // app.post('/hse/assignedlinkingstudiesarticlequeue/setcompleted/:articleId', HSEAssignedLinkingStudiesArticleQueueController.setLinkingStudiesComplete);
};
