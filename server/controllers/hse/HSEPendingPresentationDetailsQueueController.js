/**
 * @name HSEPendingPresentationDetailsQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the presentation details queue
 * and are not assigned to any user.
 */

const mongoose = require('mongoose');

const Authentication = require('../authentication');

const HSEArticleModelClass = mongoose.model('HSEArticles');

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => {
  // REFACTOR: rename to list
  HSEArticleModelClass.find({ complicated: false })
    .and([{ _presentationDetailsJunior: null }])
    .exec((err, articles) => {
      if (err) {
        return res.send(err);
      } if (!articles) {
        return res.status(404).send({
          message: 'No article in the Presentation Details Article Pending Queue',
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

  return await HSEArticleModelClass.findById(id);
};

exports.create = (req, res) => {
  // DEFUNCT
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.addArticleToJuniorPresentationDetailer = async (req, res) => {
  const { articleId } = req.params;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  if (!mongoose.Types.ObjectId.isValid(articleId)) {
    return res.status(400).send({
      message: 'Article is invalid',
    });
  }

  HSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    } if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    } if (article._presentationDetailsJunior !== null) {
      return res.status(404).send({
        message: 'Junior presentation detailer has already been added',
      });
    }
    if (hasRole('juniordetailer', user)) {
      article._presentationDetailsJunior = user._id;
      article._presentationDetailsJuniorEmail = user.email;

      await article.save();
      return res.status(200).send({
        message: 'Junior presentation detailer added',
      });
    }
    return res.status(400).send({
      message: 'User does not have persmission',
    });
  });
};

const hasRole = (role, user) => user.roles.includes(role);
