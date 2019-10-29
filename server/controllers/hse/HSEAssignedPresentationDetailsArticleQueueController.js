/**
 * @name HSEAssignedPresentationDetailsArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the presentation details queue
 * and assigned to the current user.
 */

const mongoose = require('mongoose');
// const UserModelClass = mongoose.model('Users');

const HSEArticleModelClass = mongoose.model('HSEArticles');
const HSEArticlePresentationDetailsModelClass = mongoose.model('HSEArticlePresentationDetails');
const Authentication = require('../authentication');

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => {
  // REFACTOR: rename to list

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  HSEArticleModelClass.find({ _presentationDetailsJunior: user._id }).exec((err, articles) => {
    if (err) {
      return res.send(err);
    }
    if (!articles) {
      return res.status(404).send({
        message: 'No article in your Assigned Presentation Details Queue',
      });
    }
    return res.status(200).send(articles);
  });
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param string req.params.articleId The ID of the article
 * @param WritableStream res The function's response body
 */
exports.fetchArticle = async (req, res) => {
  // REFACTOR: rename to fetch

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
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
    return res.status(200).send(article);
  }).populate('presentationDetailsJuniorInput');
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param string req.params.articleId The ID of the article
 * @param object req.body The details to set
 * @param WritableStream res The function's response body
 */
exports.setPresentationDetailsValues = async (req, res) => {
  const { articleId } = req.params;

  const inputValues = req.body;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  HSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }

    if (!article._presentationDetailsJunior.equals(user._id)) {
      return res.status(404).send({
        message: 'Not authorized to add inputs for Presentation Details for article',
      });
    }
    if (article._presentationDetailsJunior.equals(user._id)) {
      const newPresentationDetails = new HSEArticlePresentationDetailsModelClass(inputValues);
      newPresentationDetails._article = articleId;
      newPresentationDetails.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Presentation Details for article, err: ${err}`,
          });
        }
      });

      article.presentationDetailsJuniorInput = newPresentationDetails;

      await article.save();

      return res.status(201).send({
        message: 'Inputs for Junior Presentation Details added for article',
      });
    }
    if (article._presentationDetailsJunior.equals(user._id)) {
      const newPresentationDetails = new HSEArticlePresentationDetailsModelClass(inputValues);
      newPresentationDetails.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Presentation Details for article, err: ${err}`,
          });
        }
      });

      article.presentationDetailsJuniorInput = newPresentationDetails;
      await article.save();

      return res.status(201).send({
        message: 'Inputs for Presentation Details added for article',
      });
    }
  });
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param string req.params.articleId The ID of the article
 * @param object req.body The details to set
 * @param WritableStream res The function's response body
 */
exports.setPresentationDetailsComplete = async (req, res) => {
  const { articleId } = req.params;

  const inputValues = req.body;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  HSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }

    if (!article._presentationDetailsJunior.equals(user._id)) {
      return res.status(404).send({
        message: 'Not authorized to add inputs for presentation details for article',
      });
    }
    if (article._presentationDetailsJunior.equals(user._id)) {
      const newPresentationDetails = new HSEArticlePresentationDetailsModelClass(inputValues);
      newPresentationDetails.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Presentation Details for article, err: ${err}`,
          });
        }
      });

      article.presentationDetailsJuniorInput = newPresentationDetails;
      article.presentationDetailsJuniorCompleted = true;
      await article.save();

      setFullPresentationDetailsCompleteOrResolve(articleId);

      return res.status(201).send({
        message: 'Inputs for Junior presenter added for article',
      });
    }
  });
};

/*
exports.setEligibilityFilterComplete = async (req, res) => { // NOTE: commented out

    const { articleId } = req.params;

    const inputValues = req.body;

    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }

        if(article._eligibilityFilterJunior === user._id) {

            article.eligibilityFilterJuniorInput = inputValues;
            article.eligibilityFilterJuniorCompleted = true;

            await article.save();
            return res.status(200).send({
                message: 'Junior eligibility and filter completed for article'
            });

        }

        if(article._eligibilityFilterSenior === user._id) {

            article.eligibilityFilterSeniorInput = inputValues;
            article.eligibilityFilterSeniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Senior eligibility and filter completed for article'
            });

        }

        if( (article._eligibilityFilterJunior !== user._id) && (article._eligibilityFilterSenior !== user._id) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        }

        setFullEligibilityFilterCompleteOrResolve(articleId);

    });

};

*/

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param string req.params.articleId The ID of the article
 * @param WritableStream res The function's response body
 */
exports.setJuniorPresentationDetailsComplete = async (req, res) => {
  const { articleId } = req.params;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  HSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
    if (article._eligibilityFilterJunior !== user._id) {
      return res.status(404).send({
        message: 'You are not the junior appraisal for this article',
      });
    }
    article.eligibilityFilterJuniorCompleted = true;
    await article.save();
    return res.status(200).send({
      message: 'Junior quality appraisal completed for article',
    });
  });
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param string req.params.articleId The ID of the article
 * @param WritableStream res The function's response body
 */
exports.setSeniorPresentationDetailsComplete = async (req, res) => {
  const { articleId } = req.params;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  /*
    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }
*/

  HSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
    if (article._eligibilityFilterSenior !== user._id) {
      return res.status(404).send({
        message: 'You are not the senior appraisal for this article',
      });
    }
    article.eligibilityFilterSeniorCompleted = true;
    await article.save();
    return res.status(200).send({
      message: 'Senior quality appraisal completed for article',
    });
  });
};

const setFullPresentationDetailsComplete = async (articleId) => {
  HSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      // return res.send(err);
      console.log(err);
    } else if (!article) {
      /*
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
            */
      console.log('No article with that identifier has been found');
    }

    let newPresentationDetailsJuniorInput = null;

    await HSEArticleEligibilityFilterModelClass.findById(
      article.eligibilityFilterJuniorInput,
      (err, eligibilityFilterJuniorInput) => {
        if (err) {
          // console.log(err);
          throw new Error(err);
        } else if (!eligibilityFilterJuniorInput) {
          throw new Error('Quality Appraisal for Junior Appraisal does not exist');
        } else {
          newPresentationDetailsJuniorInput = presentationDetailsJuniorInput;
        }
      },
    );

    await HSEArticleEligibilityFilterModelClass.findById(
      article.eligibilityFilterSeniorInput,
      (err, eligibilityFilterSeniorInput) => {
        if (err) {
          // console.log(err);
          throw new Error(err);
        } else if (!eligibilityFilterSeniorInput) {
          throw new Error('Quality Appraisal for Senior Filter does not exist');
        } else {
          newEligibilityFilterSeniorInput = eligibilityFilterSeniorInput;
        }
      },
    );

    if (article.qualityAppraisalJuniorCompleted && article.qualityAppraisalSeniorCompleted) {
      // Call instance method to check if all fields on article's eligibilityFilter are equal
      if (newQualityAppraisalJuniorInput.isEqualTo(newEligibilityFilterSeniorInput)) {
        article.eligibilityFilterFullCompletion = true;
        await article.save();
        console.log('Full completion set');
        /*
                return res.status(201).send({
                    message: 'Eligibility and Filter stage passed for this article'
                });
                */
      } else {
        article.eligibilityFilterResolve = true;
        article.eligibilityFilterFinalInput = newEligibilityFilterSeniorInput;
        await article.save();
        console.log('resolve completion set');
        /*
                return res.status(201).send({
                    message: 'Resolve Eligibility and Filter values for this article'
                });
                */
      }
    } else {
      /*
            return res.status(200).send({
                message: 'Senior and Junior Eligibility and filter are not completed for article'
            });
            */
      console.log('Senior and Junior Quality Appraisal are not completed for article');
    }
  });
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param string req.params.articleId The ID of the article
 * @param WritableStream res The function's response body
 */
exports.setFullCompletion = async (req, res) => {
  const { articleId } = req.params;

  // const user = await Authentication.getUserFromToken(req.headers.authorization);

  HSEArticleModelClass.findById(articleId)
    .and([{ eligibilityFilterJuniorCompleted: true }, { eligibilityFilterSeniorCompleted: true }])
    .exec((err, article) => {
      if (err) {
        return res.send(err);
      }
      if (!article) {
        return res.status(404).send({
          message: 'Could not set Full Completion for Article Eligibility Filters',
        });
      }

      // Check to make sure all fields are the same
      if (isEligibilityFilterJuniorSeniorInputEqual(articleId)) {
        article.eligibilityFilterFullCompletion = true;
      }
    });
};

const isEligibilityFilterJuniorSeniorInputEqual = (articleId) => {
  const isEqual = false;

  HSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
  });

  return isEqual;
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param string req.params.articleId The ID of the article
 * @param WritableStream res The function's response body
 */
exports.setQualityAppraisalInputs = async (req, res) => {
  const { articleId } = req.params;

  // const user = await Authentication.getUserFromToken(req.headers.authorization);

  HSEArticleModelClass.findById(articleId)
    .and([{ qualityAppraisalJuniorCompleted: true }, { qualityAppraisalSeniorCompleted: true }])
    .exec((err, article) => {
      if (err) {
        return res.send(err);
      }
      if (!article) {
        return res.status(404).send({
          message: 'Could not set Full Completion for Article Quality Appraisal',
        });
      }

      // Check to make sure all fields are the same
      if (isQualityAppraisalJuniorSeniorInputEqual(articleId)) {
        article.qualityAppraisalFullCompletion = true;
      }
    });
};
