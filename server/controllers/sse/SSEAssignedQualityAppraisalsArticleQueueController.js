/**
 * @name SSEAssignedQualityAppraisalsArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the quality appraisal queue
 * and assigned to the current user.
 */

const mongoose = require('mongoose');
// const UserModelClass = mongoose.model('Users');

const SSEArticleModelClass = mongoose.model('SSEArticles');
const SSEArticleQualityAppraisalModelClass = mongoose.model('SSEArticleQualityAppraisals');
const Authentication = require('../authentication');

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => {
  // REFACTOR: rename to list
  const user = await Authentication.getUserFromToken(req.headers.authorization);

  SSEArticleModelClass.find()
    .or([{ _qualityAppraisalsJunior: user._id }, { _qualityAppraisalsSenior: user._id }])
    .exec((err, articles) => {
      if (err) {
        return res.send(err);
      } if (!articles) {
        return res.status(404).send({
          message: 'No article in your Quality Appraisal Queue',
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
  })
    .populate('qualityAppraisalsJuniorInput')
    .populate('qualityAppraisalsSeniorInput');
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.setQualityAppraisalValues = async (req, res) => {
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

    if (
      !(
        article._qualityAppraisalsJunior.equals(user._id)
        || article._qualityAppraisalsSenior.equals(user._id)
      )
    ) {
      return res.status(404).send({
        message: 'Not authorized to add inputs for quality appraisals for article',
      });
    } if (
      article._qualityAppraisalsJunior.equals(user._id)
      && article._qualityAppraisalsSenior.equals(user._id)
    ) {
      const newQualityAppraisals = new SSEArticleQualityAppraisalModelClass(inputValues);
      newQualityAppraisals._article = articleId;
      newQualityAppraisals.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Quality Appraisal for article, err: ${err}`,
          });
        }
      });

      article.qualityAppraisalsJuniorInput = newQualityAppraisals;
      article.qualityAppraisalsSeniorInput = newQualityAppraisals;

      await article.save();

      return res.status(201).send({
        message: 'Inputs for Junior and Senior appraisals added for article',
      });
    } if (article._eligibilityFilterJunior.equals(user._id)) {
      const newQualityAppraisal = new SSEArticleQualityAppraisalModelClass(inputValues);
      newQualityAppraisal.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Quality Appraisal for article, err: ${err}`,
          });
        }
      });

      article.QualityAppraisalsJuniorInput = newQualityAppraisals;
      await article.save();

      return res.status(201).send({
        message: 'Inputs for Junior filter added for article',
      });
    } if (article._eligibilityFilterSenior.equals(user._id)) {
      const newQualityAppraisal = new SSEArticleQualityAppraisalModelClass(inputValues);
      newEligibilityFilter.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Quality Appraisal for article, err: ${err}`,
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
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.setnewQualityAppraisalComplete = async (req, res) => {
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

    if (
      !(
        article._eligibilityFilterJunior.equals(user._id)
        || article._eligibilityFilterSenior.equals(user._id)
      )
    ) {
      return res.status(404).send({
        message: 'Not authorized to add inputs for eligibility and filter for article',
      });
    } if (
      article._eligibilityFilterJunior.equals(user._id)
      && article._eligibilityFilterSenior.equals(user._id)
    ) {
      const newEligibilityFilter = new SSEArticleEligibilityFilterModelClass(inputValues);
      newEligibilityFilter._article = articleId;
      newEligibilityFilter.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Quality Appraisal for article, err: ${err}`,
          });
        }
      });

      article.eligibilityFilterJuniorInput = newEligibilityFilter;
      article.eligibilityFilterSeniorInput = newEligibilityFilter;

      article.eligibilityFilterJuniorCompleted = true;
      article.eligibilityFilterSeniorCompleted = true;

      await article.save();

      setFullEligibilityFilterCompleteOrResolve(articleId);

      return res.status(201).send({
        message: 'Inputs for Junior and Senior filter added for article',
      });
    } if (article._eligibilityFilterJunior.equals(user._id)) {
      const newEligibilityFilter = new SSEArticleEligibilityFilterModelClass(inputValues);
      newEligibilityFilter.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Quality Appraisal for article, err: ${err}`,
          });
        }
      });

      article.eligibilityFilterJuniorInput = newEligibilityFilter;
      article.eligibilityFilterJuniorCompleted = true;
      await article.save();

      setFullEligibilityFilterCompleteOrResolve(articleId);

      return res.status(201).send({
        message: 'Inputs for Junior appraisal added for article',
      });
    } if (article._eligibilityFilterSenior.equals(user._id)) {
      const newEligibilityFilter = new SSEArticleEligibilityFilterModelClass(inputValues);
      newEligibilityFilter.save((err) => {
        if (err) {
          return res.status(422).send({
            message: `Unable to save values for Quality Appraisal for article, err: ${err}`,
          });
        }
      });

      article.eligibilityFilterSeniorInput = inputValues;
      article.eligibilityFilterSeniorCompleted = true;
      await article.save();

      setFullEligibilityFilterCompleteOrResolve(articleId);

      return res.status(201).send({
        message: 'Inputs for Senior appraisals added for article',
      });
    }
  });
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.setJuniorEligibilityFilterComplete = async (req, res) => {
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
 * @param WritableStream res The function's response body
 */
exports.setSeniorEligibilityFilterComplete = async (req, res) => {
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

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
const setFullEligibilityFilterCompleteOrResolve = async (articleId) => {
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

    let newEligibilityFilterJuniorInput = null;
    let newEligibilityFilterSeniorInput = null;

    await SSEArticleEligibilityFilterModelClass.findById(
      article.eligibilityFilterJuniorInput,
      (err, eligibilityFilterJuniorInput) => {
        if (err) {
          // console.log(err);
          throw new Error(err);
        } else if (!eligibilityFilterJuniorInput) {
          throw new Error('Quality Appraisal for Junior Appraisal does not exist');
        } else {
          newEligibilityFilterJuniorInput = eligibilityFilterJuniorInput;
        }
      },
    );

    await SSEArticleEligibilityFilterModelClass.findById(
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
 * @param WritableStream res The function's response body
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

  SSEArticleModelClass.findById(articleId, async (err, article) => {
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

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
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
