const t = require("tcomb");

const Translation = t.struct({
  articleId: t.String,
  language: t.String,
  text: t.String,
  isApproved: t.Boolean,
});

module.exports = Translation;
