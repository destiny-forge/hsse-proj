/**
 * @name HSEPendingEligibilityFiltersBatchfileQueueController.js
 * @author Kwadwo Sakyi
 * @description TODO: not sure what this file is for
 */

const mongoose = require('mongoose');

const HSEArticleBatchfileModelClass = mongoose.model('HSEArticleBatchFiles');

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listBatchfiles = async (req, res) => {
  HSEArticleBatchfileModelClass.find()
    .or([{ _eligibilityFilterJunior: null }, { _eligibilityFilterSenior: null }])
    .exec((err, batchfiles) => {
      if (err) {
        return res.send(err);
      }
      if (!batchfiles) {
        return res.status(404).send({
          message: 'No article in the Eligibility Filters Batchfile Pending Queue',
        });
      }
      return res.status(200).send(batchfiles);
    });
};

/**
 * TODO: document (code is not finished)
 *
 * @param ReadableStream req The function's request body
 * @param WritableStream res The function's response body
 */
exports.listBatchfile = async (req, res) => {
  const { id } = req.param;
  return HSEArticleBatchfileModelClass.findById(id);
};

// exports.create = (req, res) => {
//   // DEFUNCT
// };
