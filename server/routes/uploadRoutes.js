/**
 * @name uploadRoutes.js
 * @author Kwadwo Sakyi
 * @description Declaration of all upload routes
 */

// const AWS = require('aws-sdk');
// const uuid = require('uuid/v1');
// const jwt = require('jwt-simple');
const auth = require('../services/auth');
const HSEArticleBatchfileController = require('../controllers/hse/HSEArticleBatchfileController');
const SSEArticleBatchfileController = require('../controllers/sse/SSEArticleBatchfileController');

// const s3 = new AWS.S3({
//   accessKeyId: process.env.HSSE_S3_ACCESS_KEY,
//   secretAccessKey: process.env.HSSE_S3_SECRET_KEY,
// });

module.exports = app => {
  app.get(
    '/hse/getfileurl',
    auth.jwt,
    HSEArticleBatchfileController.getFileUrl
  );

  app.get(
    '/sse/getfileurl',
    auth.jwt,
    SSEArticleBatchfileController.getFileUrl
  );

  app.post('/hse/batchfile', auth.jwt, HSEArticleBatchfileController.create);
  app.post('/sse/batchfile', auth.jwt, SSEArticleBatchfileController.create);
};
