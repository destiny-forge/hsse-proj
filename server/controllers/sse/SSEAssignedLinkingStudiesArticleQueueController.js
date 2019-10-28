/**
 * @name SSEAssignedLinkingStudiesArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the linking studies queue
 * and assigned to the current user.
 */

const mongoose = require('mongoose');
// const UserModelClass = mongoose.model('Users');

const SSEArticleModelClass = mongoose.model('SSEArticles');
const SSEArticleLinkingStudiesModelClass = mongoose.model('SSEArticleLinkingStudies');
const Authentication = require('../authentication');

/**
 * Returns a list of articles which are in the linking studies queue and assigned to a particular user
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => {
  // REFACTOR: rename to list

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  SSEArticleModelClass.find({ _linkingStudiesJunior: user._id }).exec((err, articles) => {
    if (err) {
      return res.send(err);
    } if (!articles) {
      return res.status(404).send({
        message: 'No article in your Assigned Linking Studies Queue',
      });
    }
    return res.status(200).send(articles);
  });
};

/**
 * Returns the details of an article assigned to a particular user
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

  SSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    } if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
    return res.status(200).send(article);
  }).populate('linkingStudiesJuniorInput');
};

/**
 * Sets an assigned article's details
 * REFACTOR: significant duplication of code in setLinkingStudiesValues and setLinkingStudiesComplete
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param string req.params.articleId The ID of the article
 * @param object req.body The details to set
 * @param WritableStream res The function's response body
 */
exports.setLinkingStudiesValues = async (req, res) => {
  // REFACTOR: rename to setValues

  const { articleId } = req.params;

  const inputValues = req.body;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  SSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    } if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }

    if (!article._linkingStudiesJunior.equals(user._id)) {
      return res.status(404).send({
        message: 'Not authorized to add inputs for Linking Studies for article',
      });
    } if (article._linkingStudiesJunior.equals(user._id)) {
      const newlinkingStudies = new SSEArticleLinkingStudiesModelClass(inputValues);
      newlinkingStudies._article = articleId;
      newlinkingStudies.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Linking Studies for article, err: ${err}`,
          });
        }
      });

      article.linkingStudiesJuniorInput = newlinkingStudies;

      await article.save();

      return res.status(201).send({
        message: 'Inputs for Junior Linking Studies added for article',
      });
    } if (article._linkingStudiesJunior.equals(user._id)) {
      const newLinkingStudies = new SSEArticleLinkingStudiesModelClass(inputValues);
      newLinkingStudies.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Linking Studies for article, err: ${err}`,
          });
        }
      });

      article.linkingStudiesJuniorInput = newLinkingStudies;
      await article.save();

      return res.status(201).send({
        message: 'Inputs for Junior linker added for article',
      });
    } if (article._eligibilityFilterSenior.equals(user._id)) {
      const newLinkingStudies = new SSEArticleLinkingStudiesModelClass(inputValues);
      newLinkingStudies.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Linking Studies for article, err: ${err}`,
          });
        }
      });

      article.eligibilityFilterSeniorInput = inputValues;
      await article.save();

      return res.status(201).send({
        message: 'Inputs for Senior filter added for article',
      });
    }
  });
};

/**
 * Sets an assigned article's details and also marks it as complete
 * REFACTOR: significant duplication of code in setLinkingStudiesValues and setLinkingStudiesComplete
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param string req.params.articleId The ID of the article
 * @param object req.body The details to set
 * @param WritableStream res The function's response body
 */
exports.setQualityAppraisalsComplete = async (req, res) => {
  // REFACTOR: rename to setComplete

  const { articleId } = req.params;

  const inputValues = req.body;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  SSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    } if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }

    if (!article._linkingStudiesJunior.equals(user._id)) {
      return res.status(404).send({
        message: 'Not authorized to add inputs for linking studies for article',
      });
    } if (
      article._linkingStudiesJunior.equals(user._id)
      && article._eligibilityFilterSenior.equals(user._id)
    ) {
      const newLinkingStudies = new SSEArticleLinkingStudiesModelClass(inputValues);
      newLinkingStudies._article = articleId;
      newLinkingStudies.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Linking Studies for article, err: ${err}`,
          });
        }
      });

      article.eligibilityFilterJuniorInput = newLinkingStudies;

      article.eligibilityFilterJuniorCompleted = true;

      await article.save();

      setFullLinkingStudiesCompleteOrResolve(articleId);

      return res.status(201).send({
        message: 'Inputs for Junior linker added for article',
      });
    } if (article._eligibilityFilterJunior.equals(user._id)) {
      const newLinkingStudies = new SSEArticleLinkingStudiesModelClass(inputValues);
      newLinkingStudies.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Linking Studies for article, err: ${err}`,
          });
        }
      });

      article.linkingStudiesJuniorInput = newLinkingStudies;
      article.linkingStudiesJuniorCompleted = true;
      await article.save();

      setFullLinkingStudiesCompleteOrResolve(articleId);

      return res.status(201).send({
        message: 'Inputs for Junior linker added for article',
      });
    }
  });
};

/*
exports.setEligibilityFilterComplete = async (req, res) => {

    const { articleId } = req.params;

    const inputValues = req.body;

    const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.findById(articleId, async (err, article) => {
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
 * TO BE REMOVED?
 */
exports.setJuniorLinkingStudiesComplete = async (req, res) => {
  // REFACTOR: rename to setJuniorComplete

  const { articleId } = req.params;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  SSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    } if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
    if (article._eligibilityFilterJunior !== user._id) {
      return res.status(404).send({
        message: 'You are not the junior linker for this article',
      });
    }
    article.eligibilityFilterJuniorCompleted = true;
    await article.save();
    return res.status(200).send({
      message: 'Junior linking studies completed for article',
    });
  });
};

const setFullLinkingStudiesComplete = async (articleId) => {
  SSEArticleModelClass.findById(articleId, async (err, article) => {
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

    let newLinkingStudiesJuniorInput = null;

    await SSEArticleLinkingStudiesModelClass.findById(
      article.linkingStudiesJuniorInput,
      (err, linkingStudiesJuniorInput) => {
        if (err) {
          // console.log(err);
          throw new Error(err);
        } else if (!linkingStudiesJuniorInput) {
          throw new Error('Linking Studies for Junior Linker does not exist');
        } else {
          newLinkingStudiesJuniorInput = linkingStudiesJuniorInput;
        }
      },
    );

    if (article.linkingStudiesJuniorCompleted) {
      // Call instance method to check if all fields on article's linkingStudies are equal
      if (newLinkingStudiesJuniorInput.isEqualTo(newLinkingStudiesSeniorInput)) {
        article.linkingStudiesFullCompletion = true;
        await article.save();
        console.log('Full completion set');
        /*
                return res.status(201).send({
                    message: 'Linking Studies stage passed for this article'
                });
                */
      } else {
        article.linkingStudiesFinalInput = newLinkingStudiesSeniorInput;
        await article.save();
        console.log('resolve completion set');
        /*
                return res.status(201).send({
                    message: 'Resolve Linking Studies values for this article'
                });
                */
      }
    } else {
      /*
            return res.status(200).send({
                message: 'Senior and Junior Eligibility and filter are not completed for article'
            });
            */
      console.log('Junior Quality Appraisal are not completed for article');
    }
  });
};

/**
 * TO BE REMOVED?
 */
exports.setFullCompletion = async (req, res) => {
  const { articleId } = req.params;

  // const user = await Authentication.getUserFromToken(req.headers.authorization);

  SSEArticleModelClass.findById(articleId)
    .and([{ eligibilityFilterJuniorCompleted: true }, { eligibilityFilterSeniorCompleted: true }])
    .exec((err, article) => {
      if (err) {
        return res.send(err);
      } if (!article) {
        return res.status(404).send({
          message: 'Could not set Full Completion for Article Linking Studies',
        });
      }

      // Check to make sure all fields are the same
      if (isEligibilityFilterJuniorSeniorInputEqual(articleId)) {
        article.linkingStudiesFullCompletion = true;
      }
    });
};

const isEligibilityFilterJuniorSeniorInputEqual = (articleId) => {
  const isEqual = false;

  HSEArticleModelClass.findById(articleId, async (err, article) => {
    // TODO: referencing HSE in SSE code
    if (err) {
      return res.send(err);
    } if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
  });

  return isEqual;
};

// Function refers to quality appraisal, probably doesn't belong here and should be removed
exports.setQualityAppraisalInputs = async (req, res) => {
  const { articleId } = req.params;

  // const user = await Authentication.getUserFromToken(req.headers.authorization);

  SSEArticleModelClass.findById(articleId)
    .and([{ qualityAppraisalJuniorCompleted: true }, { qualityAppraisalSeniorCompleted: true }])
    .exec((err, article) => {
      if (err) {
        return res.send(err);
      } if (!article) {
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
