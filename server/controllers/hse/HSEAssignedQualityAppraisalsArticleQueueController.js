/**
 * @name HSEAssignedQualityAppraisalsArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the quality appraisal queue
 * and assigned to the current user.
 */

const _ = require('lodash');
const mongoose = require('mongoose');
// const UserModelClass = mongoose.model('Users');

const HSEArticleModelClass = mongoose.model('HSEArticles');
const HSEArticleQualityAppraisalModelClass = mongoose.model('HSEArticleQualityAppraisals');
const Authentication = require('../authentication');

/**
 * TODO: document (code is not finished)
 * 
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => { // REFACTOR: rename to list

    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.find({ complicated: false, qualityAppraisalsFullCompletion: false })
    .or([ { _qualityAppraisalsJunior: user._id }, { _qualityAppraisalsSenior: user._id } ])
    .exec(function(err, articles) {
        if(err) {
            return res.send(err);
        } else if(!articles) {
            return res.status(404).send({
                message: 'No article in your Quality Appraisal Queue'
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
exports.fetchArticle = async (req, res) => { // REFACTOR: rename to fetch

    const { articleId } = req.params;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
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
exports.setQualityAppraisalsValues = async (req, res) => {

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
        
        if( !(user._id.equals(article._qualityAppraisalsJunior) || user._id.equals(article._qualityAppraisalsSenior) ) ){

            return res.status(404).send({
                message: 'Not authorized to add inputs for quality appraisals for article'
            });

        } else if( user._id.equals(article._qualityAppraisalsJunior) ) {

            await HSEArticleQualityAppraisalModelClass.findOneAndUpdate(
                { _id: article.qualityAppraisalsJuniorInput },
                
                { hseState: inputValues },

                {new: true, useFindAndModify: false},
                
                // the callback function
                (err, todo) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);
                    console.log(todo)
                    return res.send({
                        message: 'Inputs for Junior appraiser added for article'
                    });
                }
            );
            
        } else if( user._id.equals(article._qualityAppraisalsSenior) ) {

            await HSEArticleQualityAppraisalModelClass.findOneAndUpdate(
                { _id: article.qualityAppraisalsSeniorInput },
                   
                { hseState: inputValues },

                { new: true, useFindAndModify: false},
                
                // the callback function
                (err, todo) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);
                    console.log(todo);
                    return res.send({
                        message: 'Inputs for Senior appraiser added for article'
                    });
                }
            );
            
        } 
        
    });

};

/**
 * TODO: document (code is not finished)
 * 
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.setQualityAppraisalsComplete = async (req, res) => {

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
        
        if( !(article._qualityAppraisalsJunior.equals(user._id) || article._qualityAppraiasalsSenior.equals(user._id)) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for quality apraisals for article'
            });

        } else if ( article._eligibilityFilterJunior.equals(user._id) && article._eligibilityFilterSenior.equals(user._id) ) {

            const newQualityAppraisals = new HSEArticleEligibilityFilterModelClass(inputValues);
            newQualityAppraisals._article = articleId;
            newQualityAppraisals.save( (err) => {

                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Quality Appraisal for article, err: ${err}`
                    });
                }
        
            });
            
            article.qualityAppraisalsJuniorInput = newQualityAppraisal;
            article.qualityAppraisalsSeniorInput = newQualityAppraisals;
            
            article.qualityAppraisalsJuniorCompleted = true;
            article.qualityAppraisalsSeniorCompleted = true;

            await article.save();

            setFullEligibilityFilterCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Junior and Senior filter added for article'
            });

        } else if( article._eligibilityFilterJunior.equals(user._id) ) {

            const newEligibilityFilter = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Quality Appraisal for article, err: ${err}`
                    });
                }
        
            });
            
            article.eligibilityFilterJuniorInput = newEligibilityFilter;
            article.eligibilityFilterJuniorCompleted = true;
            await article.save();

            setFullEligibilityFilterCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Junior appraisal added for article'
            });
            
        } else if( article._eligibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilter = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Quality Appraisal for article, err: ${err}`
                    });
                }
        
            });

            article.eligibilityFilterSeniorInput = inputValues;
            article.eligibilityFilterSeniorCompleted = true;
            await article.save();

            setFullEligibilityFilterCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Senior appraisals added for article'
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
 * @param WritableStream res The function's response body
 */
exports.setJuniorEligibilityFilterComplete = async (req, res) => {

    const { articleId } = req.params;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._eligibilityFilterJunior !== user._id) {
            return res.status(404).send({
                message: 'You are not the junior appraisal for this article'
            });
        } else {

            article.eligibilityFilterJuniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Junior quality appraisal completed for article'
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
exports.setSeniorEligibilityFilterComplete = async (req, res) => {

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
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._eligibilityFilterSenior !== user._id) {
            return res.status(404).send({
                message: 'You are not the senior appraisal for this article'
            });
        } else {

            article.eligibilityFilterSeniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Senior quality appraisal completed for article'
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
exports.setFullQualityAppraisalCompleteOrResolve = async (req, res) => {

    const { articleId } = req.params;

    const inputValues = req.body;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    console.log(user);

    console.log(`*** user._id: ${user._id}`);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }
        console.log(`*** article._qualityAppraisalsJunior: ${article._qualityAppraisalsJunior}`);
        console.log(`*** article._qualityAppraisalsSenior: ${article._qualityAppraisalsSenior}`);
        if( !(user._id.equals(article._qualityAppraisalsJunior) || user._id.equals(article._qualityAppraisalsSenior) ) ){
            
            return res.status(404).send({
                message: 'Not authorized to add inputs for quality appraisals for article'
            });

        } else if( user._id.equals(article._qualityAppraisalsJunior) ) {
            console.log(`*** INSIDE FINISHING FOR JUNIOR QUALITY APPRAISALS ***`);
            console.log(`*** article._qualityAppraisalsJunior: ${article._qualityAppraisalsJunior}`);
            await HSEArticleQualityAppraisalModelClass.findOneAndUpdate(
                { _id: article.qualityAppraisalsJuniorInput },
                
                { hseState: inputValues },

                {new: true, useFindAndModify: false},
                
                // the callback function
                (err, juniorQualityAppraisals) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);
                    /*
                    return res.send({
                        message: 'Inputs for Junior filter added for article'
                    });
                    */
                }
            );

            article.qualityAppraisalsJuniorCompleted = true;
            await article.save();

            
        } else if( user._id.equals(article._qualityAppraisalsSenior) ) {

            await HSEArticleQualityAppraisalModelClass.findOneAndUpdate(
                { _id: article.qualityAppraisalsSeniorInput },
                   
                { hseState: inputValues },

                { new: true, useFindAndModify: false},
                
                // the callback function
                (err, seniorQualityAppraisals) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);
                    console.log(seniorQualityAppraisals);
                    /*
                    return res.send({
                        message: 'Inputs for Senior filter added for article'
                    });
                    */
                }
            );

            article.qualityAppraisalsSeniorCompleted = true;
            await article.save();
            
        }

        if(article.qualityAppraisalsJuniorCompleted && article.qualityAppraisalsSeniorCompleted) {
            console.log("*** CHECKING TO SEE IF JUNIOR AND SENIOR APPRAISERS HAVE COMPLETED ***");
            // Call instance method to check if all fields on article's eligibilityFilter are equal

            await HSEArticleQualityAppraisalModelClass.findById(article.qualityAppraisalsJuniorInput, async (err, qualityAppraisalJunior) => {
                //console.log(qualityAppraisalJunior);
                if(err) {

                    return res.send(err);
        
                } else if(!qualityAppraisalJunior) {
        
                    return res.status(404).send({
                        message: 'No Eligibility Filter with that identifier has been found'
                    });
        
                } else {
                    await HSEArticleQualityAppraisalModelClass.findById(article.qualityAppraisalsSeniorInput, async (err, qualityAppraisalSenior) => {
                        
                        if(err) {

                            return res.send(err);
                
                        } else if(!qualityAppraisalJunior) {
                
                            return res.status(404).send({
                                message: 'No Eligibility Filter with that identifier has been found'
                            });
                
                        } else {
                            //if( (qualityAppraisalJunior !== null) && (qualityAppraisalJunior !== null) && qualityAppraisalJunior.isEqualTo(qualityAppraisalSenior)  ) {
                            if( (qualityAppraisalJunior !== null) && (qualityAppraisalJunior !== null) && _.isEqual(qualityAppraisalJunior.hseState, qualityAppraisalSenior.hseState) ) {
                                console.log(qualityAppraisalJunior.hseState.inputValues);
                                console.log(qualityAppraisalSenior.hseState.inputValues);
                                article.qualityAppraisalsFullCompletion = true;
                                article.qualityAppraisalsFinalInput = qualityAppraisalSenior;
                                article.qualityAppraisalsResolve = false;
                                await article.save();
                                console.log(`Full completion set`);
                                
                                return res.status(201).send({
                                    message: 'Quality Appraisals stage passed for this article'
                                });
                                
                            } else {
                
                                article.qualityAppraisalsResolve = true;
                                await article.save();
                                console.log(`resolve completion set`);
                                
                                return res.status(201).send({
                                    message: 'Resolve Quality Appraisals values for this article'
                                });
                                
                            }
                        }
                    });
                }
            });

            

        } else {

            console.log('Senior and Junior Quality Appraisals are not completed for article');
            
            return res.status(200).send({
                message: 'Senior and Junior Quality Appraisals are not completed for article'
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
exports.setFullCompletion = async (req, res) => {

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId)
       .and([ { eligibilityFilterJuniorCompleted: true }, { eligibilityFilterSeniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Eligibility Filters'
               });
           }

           // Check to make sure all fields are the same
           if(isEligibilityFilterJuniorSeniorInputEqual(articleId)) {
               article.eligibilityFilterFullCompletion = true;
           } 
           
       });
};

const isEligibilityFilterJuniorSeniorInputEqual = (articleId) => {

    const isEqual = false;

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
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

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId)
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


