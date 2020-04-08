const t = require("tcomb");
const shortid = require("shortid");

/* Not to be instantiated directly, used as the base Article
 * for all the shared fields between the HSEArticle and SSEArticle
 */
const Article = t.struct(
  {
    _id: t.maybe(t.String),
    legacyId: t.maybe(t.String),
    batchId: t.maybe(t.Object),
    batchName: t.maybe(t.String),
    shortId: t.String,

    title: t.String,
    journal: t.String,
    authors: t.String,
    source: t.String,
    type: t.String,

    language: t.String,
    complicated: t.Boolean,
    lost: t.Boolean,

    published: t.Date,
    harvested: t.maybe(t.Date),

    //refMan fields
    referenceType: t.maybe(t.String),
    rating: t.maybe(t.String),
    year: t.maybe(t.String),
    volume: t.maybe(t.String),
    issue: t.maybe(t.String),
    pages: t.maybe(t.String),
    startPage: t.maybe(t.String),
    ePubDate: t.maybe(t.String),
    date: t.maybe(t.String),
    typeOfArticle: t.maybe(t.String),
    shortTitle: t.maybe(t.String),
    alternateJournal: t.maybe(t.String),
    ISSN: t.maybe(t.String),
    DOI: t.maybe(t.String),
    originalPublication: t.maybe(t.String),
    rePrintEdition: t.maybe(t.String),
    reviewedItem: t.maybe(t.String),
    legalNote: t.maybe(t.String),
    PMCID: t.maybe(t.String),
    NIHMSID: t.maybe(t.String),
    articleNumber: t.maybe(t.String),
    accessionNumber: t.maybe(t.String),
    callNumber: t.maybe(t.String),
    label: t.maybe(t.String),
    abstract: t.maybe(t.String),
    keywords: t.maybe(t.String),
    notes: t.maybe(t.String),
    researchNotes: t.maybe(t.String),
    URL: t.maybe(t.String),
    fileAttachments: t.maybe(t.String),
    authorAddress: t.maybe(t.String),
    figure: t.maybe(t.String),
    caption: t.maybe(t.String),
    accessDate: t.maybe(t.String),
    translatedAuthor: t.maybe(t.String),
    translatedTitle: t.maybe(t.String),
    nameOfDatabase: t.maybe(t.String),
    databaseProvider: t.maybe(t.String),
    stages: t.maybe(t.Object),
    status: t.maybe(t.String)
  },
  {
    defaultProps: {
      shortId: shortid.generate(),
      source: "Single article from referrals",
      language: "English",
      complicated: false,
      lost: false,
      status: "created",
      stages: {
        eligibility: { status: "pending_assignment" },
        studies: { status: "pending_assignment" },
        appraisals: { status: "pending_assignment" },
        prioritizing: { status: "pending_assignment" },
        translations: { status: "pending_assignment" }
      }
    }
  }
);

module.exports = Article;
