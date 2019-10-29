/**
 * @name SSEPendingQualityAppraisalsArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the quality appraisal queue
 * and are not assigned to any user.
 */

const mongoose = require('mongoose');
const Authentication = require('../authentication');
const { hasRole } = require('../../util/auth');

const SSEArticleModelClass = mongoose.model('SSEArticles');

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */

exports.listArticles = async (req, res) => {
  // REFACTOR: rename to list
  SSEArticleModelClass.find({
    complicated: false /* eligibilityFiltersFullCompletion: true */,
  })
    .or([{ _qualityAppraisalsJunior: null }, { _qualityAppraisalsSenior: null }])
    .exec((err, articles) => {
      if (err) {
        return res.send(err);
      }
      if (!articles) {
        return res.status(404).send({
          message: 'No article in the Quality Appraisal Article Pending Queue',
        });
      }
      return res.status(200).send(articles);
    });
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listArticle = async (req, res) => {
  // REFACTOR: rename to fetch
  const { id } = req.param;
  return SSEArticleModelClass.findById(id, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
    return res.status(200).send(article);
  });
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.addArticleToJuniorQualityAppraiser = async (req, res) => {
  const { articleId } = req.params;
  const user = await Authentication.getUserFromToken(req.headers.authorization);

  if (!hasRole('juniorappraiser', user) && !hasRole('seniorappraiser', user)) {
    return res.status(400).send({
      message: 'User does not have permission',
    });
  }

  if (!mongoose.Types.ObjectId.isValid(articleId)) {
    return res.status(400).send({
      message: 'Article is invalid',
    });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  return SSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }

    if (article._qualityAppraisalsJunior !== undefined) {
      return res.status(404).send({
        message: 'A junior appraiser has already been added for this article',
      });
    }

    article._qualityAppraisalsJunior = user._id;
    article._qualityAppraisalsJuniorEmail = user.email;

    await article.save();
    return res.status(200).send({
      message: 'Junior quality appraiser added',
    });
  });
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.addArticleToSeniorQualityAppraiser = async (req, res) => {
  const { articleId } = req.params;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  if (!hasRole('seniorappraiser', user)) {
    return res.status(400).send({
      message: 'User does not have permission',
    });
  }

  if (!mongoose.Types.ObjectId.isValid(articleId)) {
    return res.status(400).send({
      message: 'Article is invalid',
    });
  }

  return SSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }

    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }

    if (article._qualityAppraisalsSenior !== undefined) {
      return res.status(404).send({
        message: 'A senior appraiser has already been added for this article',
      });
    }

    article._qualityAppraisalsSenior = user._id;
    article._qualityAppraisalsSeniorEmail = user.email;

    await article.save();
    return res.status(200).send({
      message: 'Senior quality appraiser user added',
    });
  });
};
