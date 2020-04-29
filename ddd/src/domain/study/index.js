const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");
const shortid = require("shortid");

const Link = t.struct({
  country: t.String,
  name: t.String,
  url: t.String,
  atLeast: t.Boolean,
  isFocus: t.Boolean,
});

const Study = t.struct(
  {
    _id: t.maybe(t.String),
    shortId: t.String,
    articleId: t.maybe(t.Object),
    userId: t.maybe(t.Object),

    links: t.list(Link),

    countries: t.Boolean,
    countryFocus: t.Boolean,

    english: t.Boolean,
    fullText: t.Boolean,
    largeReviews: t.Boolean,

    status: t.String, //'New article', 'In progress', 'Completed', 'Unknown'
  },
  {
    defaultProps: {
      shortId: shortid.generate(),
      status: "Unknown",
      english: true,
      fullText: true,
      largeReviews: false,
      countries: true,
      countryFocus: false,
    },
  }
);

module.exports = compose(cleanData, Study, cleanMongoId);
