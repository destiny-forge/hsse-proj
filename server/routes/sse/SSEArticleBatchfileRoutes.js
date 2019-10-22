/**
 * @name SSEArticleBatchfileRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for SSE article batch files
 */

const passport = require('passport');

const SSEArticleBatchfileController = require('../../controllers/sse/SSEArticleBatchfileController');
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    //app.get('/api/hse/batchfile', requireSignin, HSEBatchfileController.list);
    app.get('/sse/articlebatchfiles', SSEArticleBatchfileController.list);
    app.get('/sse/articlebatchfiles/:batchfileId', SSEArticleBatchfileController.read);
    app.post('/sse/articlebatchfiles', SSEArticleBatchfileController.create);
    // app.delete('/sse/articlebatchfile/:batchfileId', SSEArticleBatchfileController.delete);
};
