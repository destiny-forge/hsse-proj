/**
 * @name SSEPendingEligibilityFiltersArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the eligibility and filters queue
 * and are not assigned to any user.
 */

const mongoose = require('mongoose');
const Authentication = require('../authentication');
const { hasRole } = require('../../util/auth');

const SSEArticleModelClass = mongoose.model('SSEArticles');

/**
 * TODO: document
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => {
  SSEArticleModelClass.find({ complicated: false })
    .or([
      { _eligibilityFiltersJunior: null },
      { _eligibilityFiltersSenior: null }
    ])
    .exec((err, articles) => {
      if (err) {
        return res.send(err);
      }
      if (!articles) {
        return res.status(404).send({
          message: 'No article in the Eligibility Filters Article Pending Queue'
        });
      }
      return res.status(200).send(articles);
    });
};

/**
 * TODO: document
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listArticle = async (req, res) => {
  const { id } = req.param;
  return SSEArticleModelClass.findById(id);
};

/**
 * TODO: document
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
// exports.create = (req, res) => {};

/**
 * TODO: document
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.addArticleToJuniorEligibilityFilterer = async (req, res) => {
  const { articleId } = req.params;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  if (!mongoose.Types.ObjectId.isValid(articleId)) {
    return res.status(400).send({
      message: 'Article is invalid'
    });
  }

  if (!hasRole('juniorfilterer', user) && !hasRole('seniorfilterer', user)) {
    return res.status(400).send({
      message: 'User does not have permission'
    });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  return SSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found'
      });
    }
    if (article._eligibilityFiltersJunior !== null) {
      return res.status(404).send({
        message: 'A junior filterer has already been added for this article'
      });
    }

    article._eligibilityFiltersJunior = user._id;
    article._eligibilityFiltersJuniorEmail = user.email;

    await article.save();
    return res.status(200).send({
      message: 'Junior eligibility and filterer user added'
    });
  });
};

/**
 * TODO: document
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.addAllArticlesToJuniorEligibilityFilterer = async (req, res) => {
  const { articleIds } = req.body;
  const { assignUser } = req.body;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  if ((!hasRole('administrater'), user)) {
    return res.status(404).send({
      message: 'Permission denied'
    });
  }

  if (
    !hasRole('juniorfilterer', assignUser) &&
    !hasRole('seniorfilterer', assignUser)
  ) {
    return res.status(400).send({
      message: 'User does not have permission'
    });
  }

  /* This is whack and needs fixing - looping through
  and returning back to caller in the loop is all sorts of wrong!
  This should be converted to a Promise.all() */
  return articleIds.forEach(articleId => {
    if (!mongoose.Types.ObjectId.isValid(articleId)) {
      return res.status(400).send({
        message: 'Article is invalid'
      });
    }

    return SSEArticleModelClass.findById(articleId, async (err, article) => {
      if (err) {
        return res.send(err);
      }
      if (!article) {
        return res.status(404).send({
          message: 'No article with that identifier has been found'
        });
      }
      if (article._eligibilityFiltersJunior !== null) {
        return res.status(404).send({
          message: 'A junior filterer has already been added for this article'
        });
      }

      article._eligibilityFiltersJunior = assignUser._id;
      article._eligibilityFiltersJuniorEmail = assignUser.email;

      await article.save();
      return res.status(200).send({
        message: 'Junior eligibility and filterer user added'
      });
    });
  });
};

/**
 * TODO: document
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.addArticleToSeniorEligibilityFilterer = async (req, res) => {
  const { articleId } = req.params;
  const user = await Authentication.getUserFromToken(req.headers.authorization);

  if (hasRole('seniorfilterer', user)) {
    return res.status(400).send({
      message: 'User does not have permission'
    });
  }

  if (!mongoose.Types.ObjectId.isValid(articleId)) {
    return res.status(400).send({
      message: 'Article is invalid'
    });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  return SSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found'
      });
    }
    if (article._eligibilityFiltersSenior !== null) {
      return res.status(404).send({
        message: 'A senior filterer has already been added for this article'
      });
    }

    article._eligibilityFiltersSenior = user._id;
    article._eligibilityFiltersSeniorEmail = user.email;

    await article.save();

    return res.status(200).send({
      message: 'Senior eligibility and filterer user added'
    });
  });
};

/**
 * TODO: document
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.addAllArticlesToSeniorEligibilityFilterer = async (req, res) => {
  const { articleIds } = req.body;
  const { assignUser } = req.body;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  if ((!hasRole('administrater'), user)) {
    return res.status(404).send({
      message: 'Permission denied'
    });
  }

  /* all sorts of wrong - Eric
  - we should return all matching articles by ids
  - then perform an update on them all with the same values
  - we should not be returning a response until the operation
  in it's entirety is complete - the code below is hella fragile!
  */
  return articleIds.forEach(articleId => {
    if (!mongoose.Types.ObjectId.isValid(articleId)) {
      return res.status(400).send({
        message: 'Article is invalid'
      });
    }

    if (!hasRole('seniorfilterer', assignUser)) {
      return res.status(400).send({
        message: 'User does not have permission'
      });
    }

    /* eslint no-param-reassign: ["error", { "props": false }] */
    return SSEArticleModelClass.findById(articleId, async (err, article) => {
      if (err) {
        return res.send(err);
      }
      if (!article) {
        return res.status(404).send({
          message: 'No article with that identifier has been found'
        });
      }
      if (article._eligibilityFiltersSenior !== null) {
        return res.status(404).send({
          message: 'A senior filterer has already been added for this article'
        });
      }

      /* all sorts of wrong - so I'm commenting out
      - articleIds is an array of ids i'm expecting
      so how do we get an article out of that of which
      we are setting properties on is beyond me
    */

      // articleIds.forEach(async article => {
      //   article._eligibilityFiltersSenior = assignUser._id;
      //   article._eligibilityFiltersSeniorEmail = assignUser.email;

      //   await article.save();
      // });

      return res.status(200).send({
        message: 'Senior eligibility and filterer user added'
      });
    });
  });
};
