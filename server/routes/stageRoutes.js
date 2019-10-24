/**
 * @name stageRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all stage routes
 */

const StageController = require('../controllers/stageController');

module.exports = (app) => {
    
    app.get('/stage/:documentId', StageController.read);
    app.get('/stages', StageController.list);
    app.post('/stages', StageController.create);
    app.delete('/stages/:stageId', StageController.delete);

};
