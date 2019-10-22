/**
 * @name HSEArticleBatchFile.js
 * @author Kwadwo Sakyi
 * @description The model representing a batch file containing multiple articles which are imported at one time
 */

const mongoose = require('mongoose');
const shortid = require('shortid');

const { Schema } = mongoose;

const HSEArticleBatchFileSchema = new Schema({

    // Field to store batchfile id from the old system
    batchfileId: { type: String },

    // Field for short id generation
    batchfileIdShort: { type: String, default: shortid.generate() },

    referenceType: { type: String },
    
    fileName: { type: String },
    batchfileUrl: String,
    uploadDate: { type: Date, default: Date.now },
    language: {type: String, enum: ['English', 'French', 'Spanish', 'Portuguese', 'Russian', 'Arabic', 'Chinese'], default: 'English' },
    harvestDate: { type: Date, default: Date.now },
    articleSource: { type: String },
    priority: {type: String, enum: ['LOW', 'MEDIUM', 'HIGH'], default: 'LOW' },
    // _articles: [{ type: Schema.Types.ObjectId], ref: 'HSEArticles'}]
    // test

})

mongoose.model('HSEArticleBatchFiles', HSEArticleBatchFileSchema);
