/**
 * @name SSEPendingEligibilityFiltersBatchfileQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description TODO: unknown
 */

const auth = require('../../services/auth');
const SSEEligibilityFilterBatchfileQueueController = require('../../controllers/sse/SSEPendingEligibilityFiltersBatchfileQueueController');

module.exports = app => {
  app.get(
    '/sse/pendingeligibilityfiltersbatchfilequeue',
    auth.jwt,
    SSEEligibilityFilterBatchfileQueueController.listBatchfiles
  );
  app.get(
    '/sse/pendingeligibilityfiltersbatchfilequeue/:id',
    auth.jwt,
    SSEEligibilityFilterBatchfileQueueController.listBatchfile
  );
};
