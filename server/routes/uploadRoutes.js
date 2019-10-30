/**
 * @name uploadRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all upload routes
 */

// const AWS = require('aws-sdk');
// const uuid = require('uuid/v1');
// const jwt = require('jwt-simple');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const HSEArticleBatchfileController = require('../controllers/hse/HSEArticleBatchfileController');
const SSEArticleBatchfileController = require('../controllers/sse/SSEArticleBatchfileController');

// const s3 = new AWS.S3({
//   accessKeyId: process.env.HSSE_S3_ACCESS_KEY,
//   secretAccessKey: process.env.HSSE_S3_SECRET_KEY,
// });

module.exports = (app) => {
  app.get('/hse/getfileurl', requireAuth, HSEArticleBatchfileController.getFileUrl);

  app.get('/sse/getfileurl', requireAuth, SSEArticleBatchfileController.getFileUrl);

  app.post('/hse/batchfile', requireAuth, HSEArticleBatchfileController.create);
  app.post('/sse/batchfile', requireAuth, SSEArticleBatchfileController.create);
};
