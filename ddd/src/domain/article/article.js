const t = require("tcomb");

/* Not to be instantiated directly, used as the base Article
 * for all the shared fields between the HSEArticle and SSEArticle
 */
const Article = t.struct(
  {
    _id: t.maybe(t.String),
    legacyId: t.maybe(t.String),
    batchId: t.maybe(t.Object),
    batchName: t.maybe(t.String),
    shortId: t.maybe(t.String),

    source: t.String,
    type: t.String,

    language: t.String,
    complicated: t.Boolean,
    lost: t.Boolean,

    published: t.Date,
    harvested: t.maybe(t.Date),

    //refMan fields
    referenceType: t.maybe(t.String),

    // these come from eligibility stage
    // so need to read from the stage data
    // or copied onto thearticle object
    documentType: t.maybe(t.String),
    questionType: t.maybe(t.String),

    title: t.String,
    journal: t.String,
    authors: t.String,

    authorAddress: t.maybe(t.String),
    ePubDate: t.maybe(t.String),

    citations: t.maybe(t.Object), // {{"en" : "x,y,z"}}
    abstract: t.maybe(t.String),
    keywords: t.maybe(t.String),
    customKeywords: t.maybe(t.String),

    volume: t.maybe(t.String),
    issue: t.maybe(t.String),
    pages: t.maybe(t.String),
    startPage: t.maybe(t.String),
    endPage: t.maybe(t.String),
    editors: t.maybe(t.String),

    pubPlace: t.maybe(t.String),
    publisher: t.maybe(t.String),

    DOI: t.maybe(t.String),

    rating: t.maybe(t.String),
    // Need to come from appraisal stage
    amstarNumerator: t.maybe(t.String),
    amstarDenominator: t.maybe(t.String),

    meshTerms: t.maybe(t.String),
    lastLitSearch: t.maybe(t.String),
    isCochrane: t.maybe(t.Boolean),
    cochraneIssue: t.maybe(t.String),
    cochraneYear: t.maybe(t.Integer),

    isEpocReview: t.maybe(t.Boolean),
    isGeneral: t.maybe(t.Boolean), // is this from the eligibility filter - generalFocus?
    isHotDocs: t.maybe(t.Boolean),

    pdfTexts: t.maybe(t.Object), // {"en": "S3 file upload url"}
    hyperlinks: t.maybe(t.Object), // {"en": "http url to pdf"}

    abstracts: t.maybe(t.Object), // {{"PubMed", ""}, {"Cochrane Library", ""}, ...}
    summaries: t.maybe(t.Object), // {{"Australasian Cochrane Centre Policy Liaison Initiative", ""}, {"Cochrane Library", ""}, ...}

    //countries: t.maybe(t.Object), // comes from studies stage
    //filters: t.maybe(t.String)    // comes from eligibility filters stage

    year: t.maybe(t.String),
    date: t.maybe(t.String),
    typeOfArticle: t.maybe(t.String),
    shortTitle: t.maybe(t.String),
    alternateJournal: t.maybe(t.String),
    ISSN: t.maybe(t.String),
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

    notes: t.maybe(t.String),
    researchNotes: t.maybe(t.String),
    URL: t.maybe(t.String),
    fileAttachments: t.maybe(t.String),

    figure: t.maybe(t.String),
    caption: t.maybe(t.String),
    accessDate: t.maybe(t.String),
    translatedAuthor: t.maybe(t.String),
    translatedTitle: t.maybe(t.String),
    nameOfDatabase: t.maybe(t.String),
    databaseProvider: t.maybe(t.String),

    stages: t.maybe(t.Object),
    status: t.maybe(t.String),
  },
  {
    defaultProps: {
      source: "Single article from referrals",
      language: "English",
      complicated: false,
      lost: false,
      status: "created",
      stages: {
        eligibility: { status: "New Article" },
        studies: { status: "New Article" },
        appraisals: { status: "New Article" },
        prioritizing: { status: "New Article" },
        translations: { status: "New Article" },
      },
    },
  }
);

module.exports = Article;
