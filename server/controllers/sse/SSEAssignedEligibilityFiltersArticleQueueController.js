/**
 * @name SSEAssignedEligibilityFiltersArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the eligibility and filters queue
 * and assigned to the current user.
 */

const mongoose = require('mongoose');
// const UserModelClass = mongoose.model('Users');

const SSEArticleModelClass = mongoose.model('SSEArticles');
const SSEArticleEligibilityFilterModelClass = mongoose.model('SSEArticleEligibilityFilters');
const Authentication = require('../authentication');

/**
 * Returns a list of articles which are in the eligibility and filters queue and assigned to a particular user
 * 
 * @param ReadableStream req The function's request body
 * @param string req.headers.authorization An authorization token which identifies the user
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => { // REFACTOR: rename to list
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.find({ lostArticle: false, complicated: false, eligibilityFiltersFullCompletion: false })
    .or([ { _eligibilityFiltersJunior: user._id }, { _eligibilityFiltersSenior: user._id } ])
    .exec(function(err, articles) {
        if(err) {
            return res.send(err);
        } else if(!articles) {
            return res.status(404).send({
                message: 'No article in your Eligibility Filters Queue'
            });
        }
        console.log(' ********** ' + user._id);
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
    .populate('eligibilityFilterJuniorInput')
    .populate('eligibilityFilterSeniorInput');

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
exports.setEligibilityFilterValues = async (req, res) => { // REFACTOR: rename to setValues

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
        
        if( !(article._eligibilityFilterJunior.equals(user._id) || article._eligibilityFilterSenior.equals(user._id)) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        } else if ( article._eligibilityFilterJunior.equals(user._id) && article._eligibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilter = new SSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter._article = articleId;
            newEligibilityFilter.save( (err) => {

                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
                    });
                }
        
            });
            
            article.eligibilityFilterJuniorInput = newEligibilityFilter;
            article.eligibilityFilterSeniorInput = newEligibilityFilter;

            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior and Senior filter added for article'
            });

        } else if( article._eligibilityFilterJunior.equals(user._id) ) {

            const newEligibilityFilter = new SSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
                    });
                }
        
            });
            
            article.eligibilityFilterJuniorInput = newEligibilityFilter;
            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior filter added for article'
            });
            
        } else if( article._eligibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilter = new SSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
                    });
                }
        
            });

            article.eligibilityFilterSeniorInput = inputValues;
            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Senior filter added for article'
            });
            
        } 
        
    });

};

/**
 * TO BE REMOVED
 */
exports.setEligibilityFilterComplete = async (req, res) => { // DEFUNCT

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
        
        if( !(article._eligibilityFilterJunior.equals(user._id) || article._eligibilityFilterSenior.equals(user._id)) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        } else if ( article._eligibilityFilterJunior.equals(user._id) && article._eligibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilter = new SSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter._article = articleId;
            newEligibilityFilter.save( (err) => {

                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
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
                message: 'Inputs for Junior and Senior filter added for article'
            });

        } else if( article._eligibilityFilterJunior.equals(user._id) ) {

            const newEligibilityFilter = new SSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
                    });
                }
        
            });
            
            article.eligibilityFilterJuniorInput = newEligibilityFilter;
            article.eligibilityFilterJuniorCompleted = true;
            await article.save();

            setFullEligibilityFilterCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Junior filter added for article'
            });
            
        } else if( article._eligibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilter = new SSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
                    });
                }
        
            });

            article.eligibilityFilterSeniorInput = inputValues;
            article.eligibilityFilterSeniorCompleted = true;
            await article.save();

            setFullEligibilityFilterCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Senior filter added for article'
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
 * TO BE REMOVED
 */
exports.setJuniorEligibilityFilterComplete = async (req, res) => { // DEFUNCT

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
                message: 'You are not the junior filter for this article'
            });
        } else {

            article.eligibilityFilterJuniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Junior eligibility and filter completed for article'
            });
        
        }
    });

};

/**
 * TO BE REMOVED
 */
exports.setSeniorEligibilityFilterComplete = async (req, res) => { // DEFUNCT

    const { articleId } = req.params;
    
     const user = await Authentication.getUserFromToken(req.headers.authorization);

/*
    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }
*/

    SSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._eligibilityFilterSenior !== user._id) {
            return res.status(404).send({
                message: 'You are not the senior filter for this article'
            });
        } else {

            article.eligibilityFilterSeniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Senior eligibility and filter completed for article'
            });
        
        }
    });

};

const setFullEligibilityFilterCompleteOrResolve = async (articleId) => {

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

        let newEligibilityFilterJuniorInput = null;
        let newEligibilityFilterSeniorInput = null;

        await SSEArticleEligibilityFilterModelClass.findById(article.eligibilityFilterJuniorInput, (err, eligibilityFilterJuniorInput) => {
            
            if(err) {
                //console.log(err);
                throw new Error(err);
            } else if(!eligibilityFilterJuniorInput) {
                throw new Error('Eligibility Filter for Junior Filter does not exist');
            } else {
                newEligibilityFilterJuniorInput = eligibilityFilterJuniorInput;
            }

        });

        await SSEArticleEligibilityFilterModelClass.findById(article.eligibilityFilterSeniorInput, (err, eligibilityFilterSeniorInput) => {

            if(err) {
                //console.log(err);
                throw new Error(err);
            } else if(!eligibilityFilterSeniorInput) {
                throw new Error('Eligibility Filter for Senior Filter does not exist');
            } else {
                newEligibilityFilterSeniorInput = eligibilityFilterSeniorInput;
            }

        });

        if(article.eligibilityFilterJuniorCompleted && article.eligibilityFilterSeniorCompleted) {
            
            // Call instance method to check if all fields on article's eligibilityFilter are equal
            if( newEligibilityFilterJuniorInput.isEqualTo(newEligibilityFilterSeniorInput) ) {

                article.eligibilityFilterFullCompletion = true;
                await article.save();
                console.log(`Full completion set`);
                /*
                return res.status(201).send({
                    message: 'Eligibility and Filter stage passed for this article'
                });
                */
            } else {

                article.eligibilityFilterResolve = true;
                article.eligibilityFilterFinalInput = newEligibilityFilterSeniorInput;
                await article.save();
                console.log(`resolve completion set`);
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
           console.log('Senior and Junior Eligibility and filter are not completed for article');
        }
    });

};

/**
 * TO BE REMOVED
 */
exports.setFullCompletion = async (req, res) => { // DEFUNCT

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.findById(articleId)
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

    SSEArticleModelClass.findById(articleId, async (err, article) => {
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


