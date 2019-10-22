/**
 * @name SSEPendingEligibilityFiltersBatchfileQueueController.js
 * @author Kwadwo Sakyi
 * @description TODO: not sure what this file is for
 */

const mongoose = require('mongoose');

const HSEArticleBatchfileModelClass = mongoose.model('HSEArticleBatchFiles'); // TODO: referencing HSE in SSE code

/**
 * TODO: document
 * 
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listBatchfiles = async (req, res) => { // REFACTOR: rename to list
    HSEArticleBatchfileModelClass.find() // TODO: referencing HSE in SSE code
        .or([ { _eligibilityFilterJunior: null }, { _eligibilityFilterSenior: null } ])
        .exec(function(err, batchfiles) {
            if(err) {
                return res.send(err);
            } else if(!batchfiles) {
                return res.status(404).send({
                    message: 'No article in the Eligibility Filters Batchfile Pending Queue'
                });
            }
            return res.status(200).send(batchfiles);
        });
};

/**
 * TODO: document
 * 
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listBatchfile = async (req, res) => { // REFACTOR: rename to fetch

    const id = req.param.id;

    return await HSEArticleBatchfileModelClass.findById(id); // TODO: referencing HSE in SSE code

};

exports.create = (req, res) => { // DEFUNCT
    
}
