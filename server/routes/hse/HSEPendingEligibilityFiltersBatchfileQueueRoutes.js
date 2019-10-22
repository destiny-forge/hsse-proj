/**
 * @name HSEPendingEligibilityFiltersBatchfileQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description TODO: unknown
 */

const HSEEligibilityFilterBatchfileQueueController = require('../../controllers/hse/HSEPendingEligibilityFiltersBatchfileQueueController');

module.exports = app => {
    app.get('/hse/pendingeligibilityfiltersbatchfilequeue', HSEEligibilityFilterBatchfileQueueController.listBatchfiles);
    app.get('/hse/pendingeligibilityfiltersbatchfilequeue/:id', HSEEligibilityFilterBatchfileQueueController.listBatchfile);
}
