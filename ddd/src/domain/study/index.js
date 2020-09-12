const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");
const shortid = require("shortid");

/*
countryLinks:  {
  "Africa": {
    id: 20,
    atLeast: 3,
    isFocus: true,
    links: [ {
      name: '',
      url: ''
    }]
  }
}
*/

const Study = t.struct(
  {
    _id: t.maybe(t.String),
    shortId: t.String,
    articleId: t.maybe(t.Object),
    userId: t.maybe(t.Object),

    countryLinks: t.Object,

    countriesNotReported: t.Boolean,
    countryNotFocus: t.Boolean,

    notInEnglish: t.Boolean,
    noFreeFullText: t.Boolean,
    largeReview: t.Boolean,

    status: t.String, //'In progress', 'Completed'
  },
  {
    defaultProps: {
      shortId: shortid.generate(),
      status: "In progress",
      notInEnglish: false,
      noFreeFullText: false,
      largeReview: false,
      countriesNotReported: false,
      countryNotFocus: false,
    },
  }
);

module.exports = compose(cleanData, Study, cleanMongoId);
