/**
 * @name HSEArticleBatchfileRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for HSE article batch files
 */

const auth = require('../../services/auth');
const HSEArticleBatchfileController = require('../../controllers/hse/HSEArticleBatchfileController');

module.exports = app => {
  // app.get('/api/hse/batchfile', auth.jwt, HSEBatchfileController.list);
  app.get(
    '/hse/articlebatchfiles',
    auth.jwt,
    HSEArticleBatchfileController.list
  );

  app.get(
    '/hse/articlebatchfiles/:batchfileId',
    auth.jwt,
    HSEArticleBatchfileController.read
  );

  app.post(
    '/hse/articlebatchfiles',
    auth.jwt,
    HSEArticleBatchfileController.create
  );
  // app.delete('/hse/articlebatchfile/:batchfileId', HSEArticleBatchfileController.delete);
};
