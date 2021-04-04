const t = require("tcomb");
const { compose } = require("ramda");
const { cleanData, cleanMongoId } = require("../helper");

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
    shortId: t.maybe(t.String),
    articleId: t.Object,
    userId: t.Object,
    type: t.String,

    countriesNotReported: t.Boolean,
    countryNotFocus: t.Boolean,

    notInEnglish: t.Boolean,
    noFreeFullText: t.Boolean,
    largeReview: t.Boolean,
    complicated: t.Boolean,

    countryLinks: t.Object,
    status: t.String, //'In progress', 'Completed'
  },
  {
    defaultProps: {
      status: "In progress",
      notInEnglish: false,
      noFreeFullText: false,
      largeReview: false,
      countriesNotReported: false,
      countryNotFocus: false,
      countryLinks: {},
      complicated: false,
    },
  }
);

module.exports = compose(cleanData, Study, cleanMongoId);
