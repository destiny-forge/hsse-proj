/**
 * @name HSEArticlePresentationDetails.js
 * @author Kwadwo Sakyi
 * @description The model representing an article's presentation details
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticlePresentationDetailsSchema = new Schema({
  _article: { type: Schema.Types.ObjectId, ref: 'HSEArticles' },
});

mongoose.model('HSEArticlePresentationDetails', HSEArticlePresentationDetailsSchema);
