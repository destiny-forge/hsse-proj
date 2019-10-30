/**
 * @name SSEArticleController.js
 * @author Kwadwo Sakyi
 * @description This file contains the CRUD controller methods for SSE articles.
 */

const mongoose = require('mongoose');

const SSEArticleModelClass = mongoose.model('SSEArticles');
const SSEArticleEligibilityFilterModelClass = mongoose.model('SSEArticleEligibilityFilters');
const SSEArticleQualityAppraisalModelClass = mongoose.model('SSEArticleQualityAppraisals');
const SSEArticleLinkingStudiesModelClass = mongoose.model('SSEArticleLinkingStudies');
const SSEArticlePresentationDetailsModelClass = mongoose.model('SSEArticlePresentationDetails');

/**
 * Creates a new article and writes it to the database
 *
 * @param ReadableStream req The function's request body
 * @param object req.body An object containing all of the article's properties
 * @param WritableStream res The function's response body
 */
exports.create = (req, res) => {
  console.log(req.body);
  const newSSEArticle = new SSEArticleModelClass(req.body);

  const newEligibilityFilterJunior = new SSEArticleEligibilityFilterModelClass();
  const newEligibilityFilterSenior = new SSEArticleEligibilityFilterModelClass();

  const newQualityAppraiserJunior = new SSEArticleQualityAppraisalModelClass();
  const newQualityAppraiserSenior = new SSEArticleQualityAppraisalModelClass();

  const newLinkingStudiesJunior = new SSEArticleLinkingStudiesModelClass();

  const newPresentationDetailsJunior = new SSEArticlePresentationDetailsModelClass();

  newEligibilityFilterJunior.save();
  newEligibilityFilterSenior.save();

  newQualityAppraiserJunior.save();
  newQualityAppraiserSenior.save();

  newLinkingStudiesJunior.save();

  newPresentationDetailsJunior.save();

  newSSEArticle.eligibilityFiltersJuniorInput = newEligibilityFilterJunior._id;
  newSSEArticle.eligibilityFiltersSeniorInput = newEligibilityFilterSenior._id;

  newSSEArticle.qualityAppraisalsJuniorInput = newQualityAppraiserJunior._id;
  newSSEArticle.qualityAppraisalsSeniorInput = newQualityAppraiserSenior._id;

  newSSEArticle.linkingStudiesJuniorInput = newLinkingStudiesJunior._id;

  newSSEArticle.presentationDetailsJuniorInput = newPresentationDetailsJunior._id;

  return newSSEArticle.save((err) => {
    if (err) {
      console.log(err);
      return res.status(422).send({
        message: 'Unable to save new article',
      });
    }
    return res.status(201).send(newSSEArticle);
  });
};

/**
 * Returns an article's details from the database
 *
 * @param ReadableStream req The function's request body
 * @param string req.params.articleId The ID of the article to read
 * @param WritableStream res The function's response body
 */
exports.read = (req, res) => {
  // REFACTOR: rename to fetch

  const { articleId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(articleId)) {
    return res.status(400).send({
      message: 'Article is invalid',
    });
  }

  return SSEArticleModelClass.findById(articleId, (err, article) => {
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
 * Updates an article's details in the database
 *
 * @param ReadableStream req The function's request body
 * @param string req.params.articleId The ID of the article to update
 * @param object req.body An object of properties to update the article with
 * @param WritableStream res The function's response body
 */
exports.update = (req, res) => {
  SSEArticleModelClass.findByIdAndUpdate(req.params.articleId, req.body, (err) => {});
};

/**
 * Removes an article from the database
 *
 * @param ReadableStream req The function's request body
 * @param string req.params.articleId The ID of the article to remove
 * @param WritableStream res The function's response body
 */
exports.delete = (req, res) => SSEArticleModelClass.findByIdAndRemove(req.params.articleId, (err) => {
  if (err) {
    return res.send(err);
  }
  return res.json({ message: 'Article has been removed!' });
});

/**
 * Returns a list of articles from the database
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.list = (req, res) => {
  SSEArticleModelClass.find((err, articles) => {
    if (err) {
      return res.send(err);
    }
    if (!articles) {
      return res.status(404).send({
        message: 'No article has been found',
      });
    }
    return res.status(200).send(articles);
  });
};

/**
 * Adds an article to the complicated queue
 *
 * @param ReadableStream req The function's request body
 * @param string req.params.articleId The ID of the article to add to the complicated queue
 * @param WritableStream res The function's response body
 */
exports.addToComplicatedQueue = async (req, res) => {
  const { articleId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(articleId)) {
    return res.status(400).send({
      message: 'Article is invalid',
    });
  }

  return SSEArticleModelClass.findByIdAndUpdate(
    articleId,

    { complicated: true },

    { new: true },

    // the callback function
    (err, article) => {
      // Handle any possible database errors
      if (err) return res.status(500).send(err);

      return res.send({
        message: `Article: ${article._id} has been added to the complicated queue`,
      });
    },
  );
};
