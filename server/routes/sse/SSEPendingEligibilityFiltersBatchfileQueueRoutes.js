/**
 * @name SSEPendingEligibilityFiltersBatchfileQueueRoutes.js
 * @author Kwadwo Sakyi
 * @description TODO: unknown
 */

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const SSEEligibilityFilterBatchfileQueueController = require('../../controllers/sse/SSEPendingEligibilityFiltersBatchfileQueueController');

module.exports = (app) => {
  app.get(
    '/sse/pendingeligibilityfiltersbatchfilequeue',
    requireAuth,
    SSEEligibilityFilterBatchfileQueueController.listBatchfiles,
  );
  app.get(
    '/sse/pendingeligibilityfiltersbatchfilequeue/:id',
    requireAuth,
    SSEEligibilityFilterBatchfileQueueController.listBatchfile,
  );
};
