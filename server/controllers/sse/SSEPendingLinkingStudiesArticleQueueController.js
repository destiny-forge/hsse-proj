/**
 * @name SSEPendingLinkingStudiesArticleQueueController.js
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for managing articles which are in the linking studies queue
 * and are not assigned to any user.
 */

const mongoose = require('mongoose');

const Authentication = require('../authentication');

const SSEArticleModelClass = mongoose.model('SSEArticles');

/**
 * TODO: document
 * 
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => { // REFACTOR: rename to list
    SSEArticleModelClass.find()
        .and([ { _linkingStudiesJunior: null }/*, { eligibilityFiltersFullCompletion: true }*/ ])
        .exec(function(err, articles) {
           if(err) {
               return res.send(err);
           } else if(!articles) {
               return res.status(404).send({
                   message: 'No article in the Linking Studies Article Pending Queue'
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
exports.listArticle = async (req, res) => { // REFACTOR: rename to fetch

    const id = req.param.id;

    return await SSEArticleModelClass.findById(id);

};

exports.create = (req, res) => { // DEFUNCT
    
}

/**
 * TODO: document
 * 
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.addArticleToJuniorLinker = async (req, res) => {

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

        } else if(article._linkingStudiesJunior !== undefined) {
            return res.status(404).send({
                message: 'Junior linker has already been added for this article'
            });
        } else {

            if(hasRole('juniorlinker', user) ) {

                article._linkingStudiesJunior = user._id;
                article._linkingStudiesJuniorEmail = user.email;

                await article.save();
                return res.status(200).send({
                    message: 'Junior linker added'
                });
            } else {
                return res.status(400).send({
                    message: 'User does not have persmission'
                })
            }
            
        }
    });

};

const hasRole = (role, user) => {
    return user.roles.includes(role);
}
