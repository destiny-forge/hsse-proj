/**
 * @name HSEArticleLinkingStudies.js
 * @author Kwadwo Sakyi
 * @description The model representing an article's linking studies details
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleLinkingStudiesSchema = new Schema({
    
    _article: { type: Schema.Types.ObjectId, ref: 'HSEArticles'},

    notInEnglish: { type: Boolean, default: false },
    noFreeFullText: { type: Boolean, default: false },
    largeReviews: { type: Boolean, default: false },

    countriesNotReportedInDetails: { type: Boolean, default: false },
    noSpecificCountryFocus: { type: Boolean, defualt: false },

    links: { type: [String] },

    links: [{
        country: String,
        linkName: String,
        linkUrl: String,
        atLeast: Boolean,
        isFocus: Boolean,
    }],
        
    status: { type: String, enum: ['New article', 'In progress', 'Completed', 'Unknown'], default: 'Unknown' },

});

mongoose.model('HSEArticleLinkingStudies', HSEArticleLinkingStudiesSchema);
