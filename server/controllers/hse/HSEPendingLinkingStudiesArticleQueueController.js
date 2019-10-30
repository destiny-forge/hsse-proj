/**
 * @name HSEPendingLinkingStudiesArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the linking studies queue
 * and are not assigned to any user.
 */

const mongoose = require('mongoose');
const Authentication = require('../authentication');
const { hasRole } = require('../../util/auth');

const HSEArticleModelClass = mongoose.model('HSEArticles');

/**
 * Returns a list of articles which are in the linking studies queue and not assigned to any user
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => {
  // REFACTOR: Rename to list
  HSEArticleModelClass.find({
    complicated: false /* , eligibilityFiltersFullCompletion: true */,
  })
    .and([{ _linkingStudiesJunior: null }])
    .exec((err, articles) => {
      if (err) {
        return res.send(err);
      }
      if (!articles) {
        return res.status(404).send({
          message: 'No article in the Linking Studies Article Pending Queue',
        });
      }
      return res.status(200).send(articles);
    });
};

/**
 * Returns the details of an article not assigned to any user
 *
 * @param ReadableStream req The function's request body
 * @param string req.param.id The ID of the
 * @param WritableStream res The function's response body
 */
exports.listArticle = async (req, res) => {
  // REFACTOR: Rename to fetch
  const { id } = req.param;
  return HSEArticleModelClass.findById(id);
};

exports.create = (req, res) => {
  // DEFUNCT
};

/**
 * Assign the article to a user
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.addArticleToJuniorLinker = async (req, res) => {
  // REFACTOR: rename to assignToLinker

  const { articleId } = req.params;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  if (!mongoose.Types.ObjectId.isValid(articleId)) {
    return res.status(400).send({
      message: 'Article is invalid',
    });
  }

  if (!hasRole('linker', user)) {
    return res.status(400).send({
      message: 'User does not have permission',
    });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  return HSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
    if (article._linkingStudiesJunior !== null) {
      return res.status(404).send({
        message: 'Junior linker has already been added for this article',
      });
    }

    article._linkingStudiesJunior = user._id;
    article._linkingStudiesJuniorEmail = user.email;

    await article.save();
    return res.status(200).send({
      message: 'Junior studies linker added',
    });
  });
};
