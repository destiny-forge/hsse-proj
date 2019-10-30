/**
 * @name SSEArticleBatchfileController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing SSE article batch files.
 * Note that batch files are stored in an S3 object storage service.
 */

const axios = require('axios');
const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

const mongoose = require('mongoose');

const parseBatchfile = require('../../util/parseBatchfile');

const SSEArticleModelClass = mongoose.model('SSEArticles');
const SSEArticleBatchfileModelClass = mongoose.model('SSEArticleBatchFiles');
const SSEArticleEligibilityFilterModelClass = mongoose.model('SSEArticleEligibilityFilters');

const s3 = new AWS.S3({
  accessKeyId: process.env.HSSE_S3_ACCESS_KEY,
  secretAccessKey: process.env.HSSE_S3_SECRET_KEY,
});

/**
 * Returns the batch file's URL in the S3 object storage service
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.getFileUrl = (req, res) => {
  const key = `${Date.now()}-${uuid()}.txt`;

  return s3.getSignedUrl(
    'putObject',
    {
      Bucket: 'hsse-staging/sse',
      ContentType: 'text/plain',
      Key: key,
    },
    (err, url) => {
      if (err) {
        console.log(err);
      }
      res.send({ key, url });
    },
  );
};

/**
 * Creates a new batch file and writes it to the database
 *
 * @param ReadableStream req The function's request body
 * @param string req.body.url The URL which contains the batch file itself
 * @param Date req.body.harvestDate The date that the batch file was harvested
 * @param string req.body.articleSource The source of the articles contained within the batch file
 * @param string req.body.language The language of the articles contained within the batch file
 * @param string req.body.fileName The batch file's original name
 * @param WritableStream res The function's response body
 */
exports.create = async (req, res) => {
  const {
    url, harvestDate, articleSource, language, fileName,
  } = req.body;

  const newSSEArticleBatchfile = new SSEArticleBatchfileModelClass({
    batchfileUrl: url,
    harvestDate,
    articleSource,
    language,
    fileName,
  });
  await newSSEArticleBatchfile.save();

  let articlesArray = [];
  let articleIdArray = [];

  const data1 = await axios.get(`https://s3.amazonaws.com/hsse-staging/sse/${url}`);

  articlesArray = parseBatchfile.parseSSEJournalFile(data1.data);

  /* eslint no-param-reassign: ["error", { "props": false }] */
  articlesArray.map(async (article) => {
    await SSEArticleBatchfileModelClass.find({ batchfileUrl: url }, (err, batchfile) => {
      article._batchFile = batchfile[0]._id;
      article.language = batchfile[0].language;
      article.articleSource = batchfile[0].articleSource;
      article.harvestDate = batchfile[0].harvestDate;
    });

    const newSSEArticle = new SSEArticleModelClass(article);

    const newEligibilityFilterJunior = new SSEArticleEligibilityFilterModelClass();
    const newEligibilityFilterSenior = new SSEArticleEligibilityFilterModelClass();

    newEligibilityFilterJunior.save((err, savedEligibilityFilter) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New eligibility filter input created: ${savedEligibilityFilter._id}`);
      }
    });

    newEligibilityFilterSenior.save((err, savedEligibilityFilter) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New eligibility filter input created: ${savedEligibilityFilter._id}`);
      }
    });

    newSSEArticle.eligibilityFilterJuniorInput = newEligibilityFilterJunior;
    newSSEArticle.eligibilityFilterSeniorInput = newEligibilityFilterSenior;

    await newSSEArticle.save((err, savedArticle) => {
      if (err) {
        console.log(err);
      } else {
        articleIdArray = [...articleIdArray, savedArticle._id];

        console.log(savedArticle.eligibilityFilterJuniorInput);
      }
    });
  });

  return res.status(200).send(newSSEArticleBatchfile);
};

/**
 * Returns a list of batch files from the database
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.list = (req, res) => SSEArticleBatchfileModelClass.find((err, batchfiles) => {
  if (err) {
    return res.send(err);
  }
  if (!batchfiles) {
    return res.status(404).send({
      message: 'No batchfile has been found',
    });
  }
  return res.status(200).send(batchfiles);
});

/**
 * Read's a batch file's details from the database
 *
 * @param ReadableStream req The function's request body
 * @param string req.params.batchfileId The batch file's identifier
 * @param WritableStream res The function's response body
 */
exports.read = (req, res) => {
  // REFACTOR: rename to fetch
  const { batchfileId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(batchfileId)) {
    return res.status(400).send({
      message: 'Invalid batchfile Id',
    });
  }

  return SSEArticleModelClass.findById(batchfileId, (err, batchfile) => {
    if (err) {
      return res.send(err);
    }
    if (!batchfile) {
      return res.status(404).send({
        message: 'No batchfile with that identifier has been found',
      });
    }
    return res.status(200).send(batchfile);
  });
};
