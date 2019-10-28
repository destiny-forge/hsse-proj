/**
 * @name SSEArticlePresentationDetails.js
 * @author Kwadwo Sakyi
 * @description The model representing an article's presentation details
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const SSEArticlePresentationDetailsSchema = new Schema({
  _article: { type: Schema.Types.ObjectId, ref: 'SSEArticles' },

  questionOne: { type: String, enum: ['Yes', 'No', "Can't answer", 'Not applicable'] },
});

mongoose.model('SSEArticlePresentationDetails', SSEArticlePresentationDetailsSchema);

const props = Object.keys(SSEArticlePresentationDetailsSchema.paths);
