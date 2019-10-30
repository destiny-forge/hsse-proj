/**
 * @name SSEArticleTranslatingTitles.js
 * @author Kwadwo Sakyi
 * @description The model representing an article's translation details
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const SSEArticleTranslatingTitlesSchema = new Schema({
  _article: { type: Schema.Types.ObjectId, ref: 'HSEArticles' },

  frenchTitle: { type: String },
  frenchAbstract: { type: String },

  spanishTitle: { type: String },
  spanishAbstract: { type: String },

  portugueseTitle: { type: String },
  portugueseAbstract: { type: String },

  chineseTitle: { type: String },
  chineseAbstract: { type: String },
});

mongoose.model('SSEArticleTranslatingTitles', SSEArticleTranslatingTitlesSchema);
