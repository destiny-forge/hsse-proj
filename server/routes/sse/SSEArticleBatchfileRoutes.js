/**
 * @name SSEArticleBatchfileRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for SSE article batch files
 */

const auth = require('../../services/auth');
const SSEArticleBatchfileController = require('../../controllers/sse/SSEArticleBatchfileController');

module.exports = app => {
  // app.get('/api/hse/batchfile', auth.jwt, HSEBatchfileController.list);
  app.get(
    '/sse/articlebatchfiles',
    auth.jwt,
    SSEArticleBatchfileController.list
  );
  app.get(
    '/sse/articlebatchfiles/:batchfileId',
    auth.jwt,
    SSEArticleBatchfileController.read
  );
  app.post(
    '/sse/articlebatchfiles',
    auth.jwt,
    SSEArticleBatchfileController.create
  );
  // app.delete('/sse/articlebatchfile/:batchfileId', auth.jwt, SSEArticleBatchfileController.delete);
};
