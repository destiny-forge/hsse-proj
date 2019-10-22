/**
 * @name HSEArticleBatchfileRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all administrator-based routes for HSE article batch files
 */

const passport = require('passport');

const HSEArticleBatchfileController = require('../../controllers/hse/HSEArticleBatchfileController');
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    //app.get('/api/hse/batchfile', requireSignin, HSEBatchfileController.list);
    app.get('/hse/articlebatchfiles', HSEArticleBatchfileController.list);
    app.get('/hse/articlebatchfiles/:batchfileId', HSEArticleBatchfileController.read);
    app.post('/hse/articlebatchfiles', HSEArticleBatchfileController.create);
    // app.delete('/hse/articlebatchfile/:batchfileId', HSEArticleBatchfileController.delete);
};
