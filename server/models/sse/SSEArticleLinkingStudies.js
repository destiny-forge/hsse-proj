/**
 * @name SSEArticleLinkingStudies.js
 * @author Kwadwo Sakyi
 * @description The model representing an article's linking studies details
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const SSEArticleLinkingStudiesSchema = new Schema({
  _article: { type: Schema.Types.ObjectId, ref: 'SSEArticles' },

  questionOne: { type: String, enum: ['Yes', 'No', "Can't answer", 'Not applicable'] },
});

mongoose.model('SSEArticleLinkingStudies', SSEArticleLinkingStudiesSchema);

const props = Object.keys(SSEArticleLinkingStudiesSchema.paths);
