/**
 * @name SSEAssignedLinkingStudiesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the linkning studies queue
 * and assigned to the current user.
 */

const SSEAssignedLinkingStudiesArticleQueueController = require('../../controllers/sse/SSEAssignedLinkingStudiesArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/assignedlinkingstudiesarticlequeue',
    SSEAssignedLinkingStudiesArticleQueueController.listArticles,
  );
  app.get(
    '/sse/assignedlinkingstudiesarticlequeue/fetcharticle/:articleId',
    SSEAssignedLinkingStudiesArticleQueueController.fetchArticle,
  );

  app.post(
    '/sse/assignedlinkingstudiesarticlequeue/savevalues/:articleId',
    SSEAssignedLinkingStudiesArticleQueueController.setLinkingStudiesValues,
  );
  // app.post('/sse/assignedlinkingstudiesarticlequeue/setcompleted/:articleId', SSEAssignedLinkingStudiesArticleQueueController.setLinkingStudiesComplete);
};
