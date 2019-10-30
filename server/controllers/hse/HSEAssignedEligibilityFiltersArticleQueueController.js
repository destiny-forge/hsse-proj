/**
 * @name HSEAssignedEligibilityFiltersArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the eligibility and filters queue
 * and assigned to the current user.
 */

const _ = require('lodash');
const mongoose = require('mongoose');
const { hasRole } = require('../../util/auth');
// const UserModelClass = mongoose.model('Users');

const HSEArticleModelClass = mongoose.model('HSEArticles');
const HSEArticleEligibilityFilterModelClass = mongoose.model('HSEArticleEligibilityFilters');
const Authentication = require('../authentication');

/**
 * Returns a list of articles which are in the eligibility and filters queue and assigned to a particular user
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => {
  // REFACTOR: rename to list

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  HSEArticleModelClass.find({
    lostArticle: false,
    complicated: false,
    eligibilityFiltersFullCompletion: false,
  })
    .or([{ _eligibilityFiltersJunior: user._id }, { _eligibilityFiltersSenior: user._id }])
    .exec((err, articles) => {
      if (err) {
        return res.send(err);
      }
      if (!articles) {
        return res.status(404).send({
          message: 'No article in your Eligibility Filters Queue',
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
  })
    .populate('eligibilityFiltersJuniorInput')
    .populate('eligibilityFiltersSeniorInput');
};

/**
 * Sets an assigned article's details
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param string req.params.articleId The ID of the article
 * @param object req.body The details to set
 * @param WritableStream res The function's response body
 */
exports.setEligibilityFiltersValues = async (req, res) => {
  // REFACTOR: rename to setValues

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

    if (
      !(
        user._id.equals(article._eligibilityFiltersJunior)
        || user._id.equals(article._eligibilityFiltersSenior)
      )
    ) {
      return res.status(404).send({
        message: 'Not authorized to add inputs for eligibility and filter for article',
      });
    }
    if (user._id.equals(article._eligibilityFiltersJunior)) {
      await HSEArticleEligibilityFilterModelClass.findOneAndUpdate(
        { _id: article.eligibilityFiltersJuniorInput },

        { hseState: inputValues },

        { new: true, useFindAndModify: false },

        // the callback function
        (err, todo) => {
          // Handle any possible database errors
          if (err) return res.status(500).send(err);
          console.log(todo);
          return res.send({
            message: 'Inputs for Junior filter added for article',
          });
        },
      );
    } else if (user._id.equals(article._eligibilityFiltersSenior)) {
      await HSEArticleEligibilityFilterModelClass.findOneAndUpdate(
        { _id: article.eligibilityFiltersSeniorInput },

        { hseState: inputValues },

        { new: true, useFindAndModify: false },

        // the callback function
        (err, todo) => {
          // Handle any possible database errors
          if (err) return res.status(500).send(err);
          console.log(todo);
          return res.send({
            message: 'Inputs for Senior filter added for article',
          });
        },
      );
    }
  });
};

/*
exports.setEligibilityFiltersValues = async (req, res) => { // NOTE: commented out

    const { articleId } = req.params;

    const { inputValues }  = req.body;

    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }

        if( !(user._id.equals(article._eligibilityFiltersJunior) || user._id.equals(article._eligibilityFiltersSenior) ) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        } else if ( user._id.equals(article._eligibilityFiltersJunior) && user._id.equals(article._eligibilityFiltersSenior) ) {

            await HSEArticleEligibilityFilterModelClass.findByIdAndUpdate(
                article.eligibilityFiltersJuniorInput,

                {hseState: inputValues},

                {new: true},

                // the callback function
                (err, todo) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);

                    await HSEArticleEligibilityFilterModelClass.findByIdAndUpdate(
                        article.eligibilityFiltersSeniorInput,

                        {hseState: inputValues},

                        {new: true},

                        // the callback function
                        (err, todo) => {
                        // Handle any possible database errors
                            if (err) return res.status(500).send(err);

                            return res.send({
                                message: 'Inputs for Junior and Senior filter added for article'
                            });
                        }
                    );

                }
            );


        } else if( user._id.equals(article._eligibilityFiltersJunior) ) {

            await HSEArticleEligibilityFilterModelClass.findByIdAndUpdate(
                article.eligibilityFiltersJuniorInput,

                {hseState: inputValues},

                {new: true},

                // the callback function
                (err, article) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);

                    return res.send({
                        message: `Inputs for Junior filter added for article: ${article._id}`
                    });
                }
            );

        } else if( user._id.equals(article._eligibilityFiltersSenior) ) {

            await HSEArticleEligibilityFilterModelClass.findByIdAndUpdate(
                article.eligibilityFiltersSeniorInput,

                {hseState: inputValues},

                {new: true},

                // the callback function
                (err, todo) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);

                    return res.send({
                        message: `Inputs for Senior filter added for article: ${article._id}`
                    });
                }
            );

        }

    });

};
*/

/**
 * TO BE REMOVED
 */
exports.setEligibilityFiltersComplete = async (req, res) => {
  // DEFUNCT

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

    if (
      !(
        user._id.equals(article._eligibilityFilterJunior)
        || user._id.equals(article._eligibilityFilterSenior)
      )
    ) {
      return res.status(404).send({
        message: 'Not authorized to add inputs for eligibility and filter for article',
      });
    }
    if (user._id.equals(article._eligibilityFiltersJunior)) {
      await HSEArticleEligibilityFilterModelClass.findOneAndUpdate(
        { _id: article.eligibilityFiltersJuniorInput },

        { hseState: inputValues },

        { new: true, useFindAndModify: false },

        // the callback function
        (err, todo) => {
          // Handle any possible database errors
          if (err) return res.status(500).send(err);
          console.log(todo);
          return res.send({
            message: 'Inputs for Junior filter added for article',
          });
        },
      );
    } else if (user._id.equals(article._eligibilityFiltersSenior)) {
      await HSEArticleEligibilityFilterModelClass.findOneAndUpdate(
        { _id: article.eligibilityFiltersSeniorInput },

        { hseState: inputValues },

        { new: true, useFindAndModify: false },

        // the callback function
        (err, todo) => {
          // Handle any possible database errors
          if (err) return res.status(500).send(err);
          console.log(todo);
          return res.send({
            message: 'Inputs for Senior filter added for article',
          });
        },
      );
    }
  });
};

/**
 * TO BE REMOVED
 */
exports.setJuniorEligibilityFilterComplete = async (req, res) => {
  // DEFUNCT

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
        message: 'You are not the junior filter for this article',
      });
    }
    article.eligibilityFilterJuniorCompleted = true;
    await article.save();
    return res.status(200).send({
      message: 'Junior eligibility and filter completed for article',
    });
  });
};

/**
 * TO BE REMOVED
 */
exports.setSeniorEligibilityFiltersComplete = async (req, res) => {
  // DEFUNCT

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
        message: 'You are not the senior filter for this article',
      });
    }
    article.eligibilityFilterSeniorCompleted = true;
    await article.save();
    return res.status(200).send({
      message: 'Senior eligibility and filter completed for article',
    });
  });
};

/**
 * SAVES CHANGES AND MARKS ARTICLE AS COMPLETE BY ASSIGNED USER
 * REFACTOR: why not call setEligibilityFiltersValues() within this method instead of re-implementing settting inputs?
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param string req.params.articleId The ID of the article
 * @param object req.body The details to set
 * @param WritableStream res The function's response body
 */
exports.setFullEligibilityFiltersCompleteOrResolve = async (req, res) => {
  // REFACTOR rename to setCompleteOrResolve

  const { articleId } = req.params;

  const inputValues = req.body;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  console.log(user);

  console.log(`*** user._id: ${user._id}`);

  HSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
    console.log(`*** article._eligibilityFiltersJunior: ${article._eligibilityFiltersJunior}`);
    console.log(`*** article._eligibilityFiltersSenior: ${article._eligibilityFiltersSenior}`);
    if (
      !(
        user._id.equals(article._eligibilityFiltersJunior)
        || user._id.equals(article._eligibilityFiltersSenior)
      )
    ) {
      return res.status(404).send({
        message: 'Not authorized to add inputs for eligibility and filter for article',
      });
    }
    if (user._id.equals(article._eligibilityFiltersJunior)) {
      console.log('*** INSIDE FINISHING FOR JUNIOR ELIGIBILITY FILTERS ***');
      console.log(`*** article._eligibilityFiltersJunior: ${article._eligibilityFiltersJunior}`);
      await HSEArticleEligibilityFilterModelClass.findOneAndUpdate(
        { _id: article.eligibilityFiltersJuniorInput },

        { hseState: inputValues },

        { new: true, useFindAndModify: false },

        // the callback function
        (err, juniorEligibilityFilter) => {
          // Handle any possible database errors
          if (err) return res.status(500).send(err);
          /*
                    return res.send({
                        message: 'Inputs for Junior filter added for article'
                    });
                    */
        },
      );

      article.eligibilityFiltersJuniorCompleted = true;
      await article.save();
    } else if (user._id.equals(article._eligibilityFiltersSenior)) {
      await HSEArticleEligibilityFilterModelClass.findOneAndUpdate(
        { _id: article.eligibilityFiltersSeniorInput },

        { hseState: inputValues },

        { new: true, useFindAndModify: false },

        // the callback function
        (err, seniorEligibilityFilter) => {
          // Handle any possible database errors
          if (err) return res.status(500).send(err);
          /*
                    return res.send({
                        message: 'Inputs for Senior filter added for article'
                    });
                    */
        },
      );

      article.eligibilityFiltersSeniorCompleted = true;
      await article.save();
    }

    if (article.eligibilityFiltersJuniorCompleted && article.eligibilityFiltersSeniorCompleted) {
      console.log('*** CHECKING TO SEE IF JUNIOR AND SENIOR FILTERS HAVE COMPLETED ***');
      // Call instance method to check if all fields on article's eligibilityFilter are equal

      await HSEArticleEligibilityFilterModelClass.findById(
        article.eligibilityFiltersJuniorInput,
        async (err, eligibilityFilterJunior) => {
          if (err) {
            return res.send(err);
          }
          if (!eligibilityFilterJunior) {
            return res.status(404).send({
              message: 'No Eligibility Filter with that identifier has been found',
            });
          }
          await HSEArticleEligibilityFilterModelClass.findById(
            article.eligibilityFiltersSeniorInput,
            async (err, eligibilityFilterSenior) => {
              if (err) {
                return res.send(err);
              }
              if (!eligibilityFilterSenior) {
                return res.status(404).send({
                  message: 'No Eligibility Filter with that identifier has been found',
                });
              }
              Object.entries(eligibilityFilterJunior.hseState.inputValues).forEach((entry) => {
                // console.log(entry);
                if (Array.isArray(entry)) {
                  entry = entry.sort();
                }
              });

              Object.entries(eligibilityFilterSenior.hseState.inputValues).forEach((entry) => {
                // console.log(entry);
                if (Array.isArray(entry)) {
                  entry = entry.sort();
                }
              });
              console.log('Working');
              // console.log(_.differenceWith(eligibilityFilterJunior.hseState.inputValues, eligibilityFilterSenior.hseState.inputValues, _.isEqual));
              // console.log(_.isEqual(eligibilityFilterJunior.hseState.inputValues, eligibilityFilterSenior.hseState.inputValues));
              console.log(eligibilityFilterJunior.hseState.inputValues);
              // console.log(JSON.stringify(eligibilityFilterJunior.hseState.inputValues));
              console.log('-------------');
              // console.log(JSON.stringify(eligibilityFilterSenior.hseState.inputValues))
              console.log(eligibilityFilterSenior.hseState.inputValues);
              // if( eligibilityFilterJunior.isEqualTo(eligibilityFilterSenior) /* && (eligibilityFilterJunior !== null) && (eligibilityFilterJunior !== null) */) {
              if (
                _.isEqual(
                  eligibilityFilterJunior.hseState.inputValues,
                  eligibilityFilterSenior.hseState.inputValues,
                )
              ) {
                // if( _.differenceWith(eligibilityFilterJunior.hseState.inputValues, eligibilityFilterSenior.hseState.inputValues, _.isEqual).length === 0 ) {
                // if( JSON.stringify(eligibilityFilterJunior.hseState.inputValues) == JSON.stringify(eligibilityFilterSenior.hseState.inputValues) ) {
                article.eligibilityFiltersFullCompletion = true;
                article.eligibilityFilterFinalInput = eligibilityFilterSenior;
                article.eligibilityFiltersResolve = false;
                await article.save();
                console.log('Full completion set');

                return res.status(201).send({
                  message: 'Eligibility and Filter stage passed for this article',
                });
              }
              article.eligibilityFiltersResolve = true;
              await article.save();
              console.log('resolve completion set');

              return res.status(201).send({
                message: 'Resolve Eligibility and Filter values for this article',
              });
            },
          );
        },
      );
    } else {
      console.log('Senior and Junior Eligibility and filter are not completed for article');

      return res.status(200).send({
        message: 'Senior and Junior Eligibility and filter are not completed for article',
      });
    }
  });
};

/**
 * TO BE REMOVED
 */
exports.setFullCompletion = async (req, res) => {
  // DEFUNCT

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
 * TO BE REMOVED
 */
exports.setEligibilityFilterInputs = async (req, res) => {
  // DEFUNCT

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

/**
 * Remove a junior assigned article from a user
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param string req.params.articleId The ID of the article
 * @param WritableStream res The function's response body
 */
exports.removeArticleFromJuniorEligibilityFilterer = async (req, res) => {
  // REFACTOR: rename to removeFromJunior

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
    if (article._eligibilityFiltersJunior === null) {
      return res.status(404).send({
        message: 'A junior filterer has not been added for this article',
      });
    }
    if (hasRole('juniorfilterer', user) || hasRole('seniorfilterer', user)) {
      article._eligibilityFiltersJunior = null;
      article._eligibilityFiltersJuniorEmail = null;

      await article.save();
      return res.status(200).send({
        message: 'Junior eligibility and filterer user removed',
      });
    }
    return res.status(400).send({
      message: 'User does not have permission',
    });
  });
};

/**
 * Remove multiple junior assigned articles from a user
 * REFACTOR: this and removeArticleFromJuniorEligibilityFilterer() are identical other than working on one or multiple articles
 *           so why not merge the two?
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param array req.params.articleIds An array of article IDs to affect
 * @param WritableStream res The function's response body
 */
exports.removeAllArticlesFromJuniorEligibilityFilterer = async (req, res) => {
  // REFACTOR: rename to removeAllFromJunior

  const { articleIds } = req.body;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  articleIds.forEach((articleId, index) => {
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
      if (article._eligibilityFiltersJunior === null) {
        return res.status(404).send({
          message: 'A junior filterer has not been added for this article',
        });
      }
      if (hasRole('juniorfilterer', user) || hasRole('seniorfilterer', user)) {
        article._eligibilityFiltersJunior = null;
        article._eligibilityFiltersJuniorEmail = null;

        await article.save();
      } else {
        return res.status(400).send({
          message: 'User does not have permission',
        });
      }
    });
  });

  return res.status(200).send({
    message: 'Junior eligibility and filterer user removed',
  });
};

/**
 * Remove a senior assigned article from a user
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param string req.params.articleId The ID of the article
 * @param WritableStream res The function's response body
 */
exports.removeArticleFromSeniorEligibilityFilterer = async (req, res) => {
  // REFACTOR: rename to removeFromSenior

  const { articleId } = req.params;
  console.log(req.headers);
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
    if (article._eligibilityFiltersSenior !== null) {
      return res.status(404).send({
        message: 'A senior filterer has already been added for this article',
      });
    }
    if (hasRole('seniorfilterer', user)) {
      articleIds.forEach(async (article) => {
        article._eligibilityFiltersSenior = null;
        article._eligibilityFiltersSeniorEmail = null;

        await article.save();
      });

      return res.status(200).send({
        message: 'Senior eligibility and filterer user added',
      });
    }
    return res.status(400).send({
      message: 'User does not have permission',
    });
  });
};

/**
 * Remove multiple senior assigned articles from a user
 * REFACTOR: this and removeArticleFromSeniorEligibilityFilterer() are identical other than working on one or multiple articles
 *           so why not merge the two?
 *
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param array req.params.articleIds An array of article IDs to affect
 * @param WritableStream res The function's response body
 */
exports.removeAllArticlesFromSeniorEligibilityFilterer = async (req, res) => {
  // REFACTOR: rename to removeAllFromSenior

  const { articleIds } = req.body;
  console.log(req.headers);
  const user = await Authentication.getUserFromToken(req.headers.authorization);

  articleIds.forEach((articleId, index) => {
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
      if (article._eligibilityFiltersSenior === null) {
        return res.status(404).send({
          message: 'A senior filterer has not been added for this article',
        });
      }
      if (hasRole('seniorfilterer', user)) {
        articleIds.forEach(async (article) => {
          article._eligibilityFiltersSenior = null;
          article._eligibilityFiltersSeniorEmail = null;

          await article.save();
        });
      } else {
        return res.status(400).send({
          message: 'User does not have permission',
        });
      }
    });
  });

  return res.status(200).send({
    message: 'Senior eligibility and filterer removed for selected articles',
  });
};
