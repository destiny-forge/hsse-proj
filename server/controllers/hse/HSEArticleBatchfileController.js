/**
 * @name HSEArticleBatchfileController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing HSE article batch files.
 * Note that batch files are stored in an S3 object storage service.
 */

const axios = require('axios');
const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

const mongoose = require('mongoose');

const parseBatchfile = require('../../util/parseBatchfile');

const HSEArticleModelClass = mongoose.model('HSEArticles');
const HSEArticleBatchfileModelClass = mongoose.model('HSEArticleBatchFiles');
const HSEArticleEligibilityFilterModelClass = mongoose.model('HSEArticleEligibilityFilters');
const HSEArticleQualityAppraisalModelClass = mongoose.model('HSEArticleQualityAppraisals');
const HSEArticleLinkingStudiesModelClass = mongoose.model('HSEArticleLinkingStudies');
const HSEArticlePresentationDetailsModelClass = mongoose.model('HSEArticlePresentationDetails');

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

  s3.getSignedUrl(
    'putObject',
    {
      Bucket: 'hsse-staging/hse',
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

  const newHSEArticleBatchfile = new HSEArticleBatchfileModelClass({
    batchfileUrl: url,
    harvestDate,
    articleSource,
    language,
    fileName,
  });
  await newHSEArticleBatchfile.save();

  let articlesArray = [];
  let articleIdArray = [];

  const data1 = await axios.get(`https://s3.amazonaws.com/hsse-staging/hse/${url}`);

  articlesArray = parseBatchfile.parseHSEJournalFile(data1.data);

  articlesArray.map(async (article) => {
    await HSEArticleBatchfileModelClass.find({ batchfileUrl: url }, (err, batchfile) => {
      console.log(batchfile);
      article._batchFile = batchfile[0]._id;
      article.language = batchfile[0].language;
      article.articleSource = batchfile[0].articleSource;
      article.harvestDate = batchfile[0].harvestDate;
    });

    const newHSEArticle = new HSEArticleModelClass(article);

    const newEligibilityFilterJunior = new HSEArticleEligibilityFilterModelClass();
    const newEligibilityFilterSenior = new HSEArticleEligibilityFilterModelClass();

    const newQualityAppraiserJunior = new HSEArticleQualityAppraisalModelClass();
    const newQualityAppraiserSenior = new HSEArticleQualityAppraisalModelClass();

    const newLinkingStudiesJunior = new HSEArticleLinkingStudiesModelClass();

    const newPresentationDetailsJunior = new HSEArticlePresentationDetailsModelClass();

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

    newQualityAppraiserJunior.save((err, savedQualityAppraiser) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New quality appraiser input created: ${savedQualityAppraiser._id}`);
      }
    });

    newQualityAppraiserSenior.save((err, savedQualityAppraiser) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New quality appraiser input created: ${savedQualityAppraiser._id}`);
      }
    });

    newLinkingStudiesJunior.save((err, savedLinkingStudies) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New linking studies input created: ${savedLinkingStudies._id}`);
      }
    });

    newPresentationDetailsJunior.save((err, savedPresentationDetails) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New presentation details input created: ${savedPresentationDetails._id}`);
      }
    });

    newHSEArticle.eligibilityFiltersJuniorInput = newEligibilityFilterJunior._id;
    newHSEArticle.eligibilityFiltersSeniorInput = newEligibilityFilterSenior._id;

    newHSEArticle.qualityAppraisalsJuniorInput = newQualityAppraiserJunior._id;
    newHSEArticle.qualityAppraisalsSeniorInput = newQualityAppraiserSenior._id;

    newHSEArticle.linkingStudiesJuniorInput = newLinkingStudiesJunior._id;

    newHSEArticle.presentationDetailsJuniorInput = newPresentationDetailsJunior._id;

    await newHSEArticle.save((err, savedArticle) => {
      if (err) {
        console.log(err);
      } else {
        articleIdArray = [...articleIdArray, savedArticle._id];
        // console.log(`Successfully save article: [${article["title"]}]`);
        console.log(savedArticle.eligibilityFilterJuniorInput);
      }
    });

    // return res.status(200).send(newHSEArticleBatchfile);
  });

  return res.status(200).send(newHSEArticleBatchfile);
};

/**
 * Returns a list of batch files from the database
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.list = (req, res) => {
  HSEArticleBatchfileModelClass.find((err, batchfiles) => {
    if (err) {
      return res.send(err);
    } if (!batchfiles) {
      return res.status(404).send({
        message: 'No batchfile has been found',
      });
    }
    return res.status(200).send(batchfiles);
  });
};

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

  HSEArticleModelClass.findById(batchfileId, (err, batchfile) => {
    if (err) {
      return res.send(err);
    } if (!batchfile) {
      return res.status(404).send({
        message: 'No batchfile with that identifier has been found',
      });
    }
    return res.status(200).send(batchfile);
  });
};
