/**
 * @name SSEAssignedPresentationDetailsArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the presentation details queue
 * and assigned to the current user.
 */

const mongoose = require('mongoose');
// const UserModelClass = mongoose.model('Users');

const SSEArticleModelClass = mongoose.model('SSEArticles');
const SSEArticlePresentationDetailsModelClass = mongoose.model('SSEArticlePresentationDetails');
const Authentication = require('../authentication');

/**
 * TODO: document (code is not finished)
 * 
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => { // REFACTOR: rename to list

    const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.find({ _presentationDetailsJunior: user._id })
    .exec(function(err, articles) {
        if(err) {
            return res.send(err);
        } else if(!articles) {
            return res.status(404).send({
                message: 'No article in your Assigned Presentation Details Queue'
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
exports.fetchArticle = async (req, res) => { // REFACTOR: rename to fetch

    const { articleId } = req.params;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }

    SSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        return res.status(200).send(article);
    })
    .populate('presentationDetailsJuniorInput')

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

    SSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }
        
        if( !(article._presentationDetailsJunior.equals(user._id) ) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for Presentation Details for article'
            });

        } else if ( article._linkingStudiesJunior.equals(user._id) ) {

            const newPresentationDetails = new SSEArticlePresentationDetailsModelClass(inputValues);
            newPresentationDetails._article = articleId;
            newPresentationDetails.save( (err) => {

                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Presentation Details for article, err: ${err}`
                    });
                }
        
            });
            
            article.presentationDetailsJuniorInput = newPresentationDetails;

            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior Presentation Details added for article'
            });

        } else if( article._presentationDetailsJunior.equals(user._id) ) {

            const newPresentationDetails = new SSEArticlePresentationDetailsModelClass(inputValues);
            newPresentationDetails.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Presentation Details for article, err: ${err}`
                    });
                }
        
            });
            
            article.presentationDetailsJuniorInput = newPresentationDetails;
            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior presenter added for article'
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

    SSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }
        
        if( !(article._presentationDetailsJunior.equals(user._id) ) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for Presentation Details for article'
            });

        } else if( article._presentationDetailsJunior.equals(user._id) ) {

            const newPresentationDetails = new SSEArticlePresentationDetailsModelClass(inputValues);
            newPresentationDetails.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Presentation Details for article, err: ${err}`
                    });
                }
        
            });
            
            article.presentationDetailsJuniorInput = newPresentationDetails;
            article.presentationDetailsJuniorCompleted = true;
            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior presenter added for article'
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

    SSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._eligibilityFilterJunior !== user._id) {
            return res.status(404).send({
                message: 'You are not the junior presenter for this article'
            });
        } else {

            article.eligibilityFilterJuniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Junior newPresentation Details completed for article'
            });
        
        }
    });

};


const setFullEligibilityFilterComplete = async (articleId) => {

    SSEArticleModelClass.findById(articleId, async (err, article) => {

        if(err) {

            //return res.send(err);
            console.log(err);

        } else if(!article) {
            /*
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
            */
           console.log('No article with that identifier has been found');
        }

        let newPresentationDetailsJuniorInput = null;

        await SSEArticlenewPresentationDetailsModelClass.findById(article.presentationDetailsJuniorInput, (err, presentationDetailsJuniorInput) => {
            
            if(err) {
                //console.log(err);
                throw new Error(err);
            } else if(!presentationDetailsJuniorInput) {
                throw new Error('Presentation Details for Junior Presenter does not exist');
            } else {
                newPresentationDetailsJuniorInput = presentationDetailsJuniorInput;
            }

        });

        if(article.presentationDetailsJuniorCompleted ) {
            
            // Call instance method to check if all fields on article's presentationDetails are equal
            if( newPresentationDetailsJuniorInput.isEqualTo(newPresentationDetailsSeniorInput) ) {

                article.presentationDetailsFullCompletion = true;
                await article.save();
                console.log(`Full completion set`);
                /*
                return res.status(201).send({
                    message: 'Presentation Details stage passed for this article'
                });
                */
            } else {

                article.linkingStudiesFinalInput = newLinkingStudiesSeniorInput;
                await article.save();
                console.log(`resolve completion set`);
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
 * TODO: document (code is not finished)
 * 
 * @param ReadableStream req The function's request body
 * @param string req.params.articleId The ID of the article
 * @param WritableStream res The function's response body
 */
exports.setFullCompletion = async (req, res) => {

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.findById(articleId)
       .and([ { eligibilityFilterJuniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Eligibility Filters'
               });
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
exports.setQualityAppraisalInputs = async (req, res) => {

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.findById(articleId)
       .and([ { qualityAppraisalJuniorCompleted: true }, { qualityAppraisalSeniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Quality Appraisal'
               });
           }

           // Check to make sure all fields are the same
           if(isQualityAppraisalJuniorSeniorInputEqual(articleId)) {
               article.qualityAppraisalFullCompletion = true;
           } 
           
       });
};


