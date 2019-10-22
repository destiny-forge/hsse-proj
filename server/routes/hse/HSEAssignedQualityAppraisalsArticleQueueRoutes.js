/**
 * @name HSEAssignedQualityAppraisalsArticleQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for articles which are in the quality appraisal queue
 * and assigned to the current user.
 */

const HSEAssignedQualityAppraisalsArticleQueueController = require('../../controllers/hse/HSEAssignedQualityAppraisalsArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedqualityappraisalsarticlequeue', HSEAssignedQualityAppraisalsArticleQueueController.listArticles);
    app.get('/hse/assignedqualityappraisalsarticlequeue/fetcharticle/:articleId', HSEAssignedQualityAppraisalsArticleQueueController.fetchArticle);

    app.post('/hse/assignedqualityappraisalsarticlequeue/savevalues/:articleId', HSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalsValues);
    app.post('/hse/assignedqualityappraisalsarticlequeue/setcompleted/:articleId', HSEAssignedQualityAppraisalsArticleQueueController.setFullQualityAppraisalCompleteOrResolve);
}
