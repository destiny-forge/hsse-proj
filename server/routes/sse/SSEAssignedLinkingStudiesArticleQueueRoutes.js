/**
 * @name SSEAssignedLinkingStudiesArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the linkning studies queue
 * and assigned to the current user.
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const SSEAssignedLinkingStudiesArticleQueueController = require('../../controllers/sse/SSEAssignedLinkingStudiesArticleQueueController');

module.exports = (app) => {
  app.get(
    '/sse/assignedlinkingstudiesarticlequeue',
    requireAuth,
    SSEAssignedLinkingStudiesArticleQueueController.listArticles,
  );
  app.get(
    '/sse/assignedlinkingstudiesarticlequeue/fetcharticle/:articleId',
    requireAuth,
    SSEAssignedLinkingStudiesArticleQueueController.fetchArticle,
  );

  app.post(
    '/sse/assignedlinkingstudiesarticlequeue/savevalues/:articleId',
    requireAuth,
    SSEAssignedLinkingStudiesArticleQueueController.setLinkingStudiesValues,
  );
  // app.post('/sse/assignedlinkingstudiesarticlequeue/setcompleted/:articleId', SSEAssignedLinkingStudiesArticleQueueController.setLinkingStudiesComplete);
};
