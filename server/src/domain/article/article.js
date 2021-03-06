const t = require("tcomb");

/* Not to be instantiated directly, used as the base Article
 * for all the shared fields between the HSEArticle and SSEArticle
 */
const Article = t.struct(
  {
    _id: t.maybe(t.String),
    legacyId: t.maybe(t.Number),
    legacyBatchId: t.maybe(t.Number),
    batchId: t.maybe(t.Object),
    batchName: t.maybe(t.String),
    shortId: t.maybe(t.String),
    type: t.String,

    monthlyUpdateDate: t.maybe(t.String),

    source: t.String,
    language: t.String,
    lost: t.Boolean,
    live: t.Boolean,
    liveDate: t.maybe(t.Date),
    published: t.maybe(t.Date),
    harvested: t.maybe(t.Date),

    title: t.String,
    journal: t.String,
    authors: t.String,

    stages: t.maybe(t.Object),
    status: t.maybe(t.String),
    deletedReason: t.maybe(t.String),

    // eligibility fields
    filters: t.maybe(t.Array),
    documentType: t.maybe(t.String),
    questionType: t.maybe(t.String),
    generalFocus: t.maybe(t.Boolean),

    // appraisal fields
    rating: t.maybe(t.String), // related
    questions: t.maybe(t.Array),
    amstarNumerator: t.maybe(t.Number),
    amstarDenominator: t.maybe(t.Number),
    noFreeFullText: t.maybe(t.Boolean),
    notInEnglish: t.maybe(t.Boolean),
    complicated: t.Boolean,

    // studies fields
    countryLinks: t.maybe(t.Object),

    // Presentation fields
    referenceType: t.maybe(t.String),
    authorAddress: t.maybe(t.String),

    citations: t.maybe(t.Object), // {{"en" : "x,y,z"}}
    abstract: t.maybe(t.String),
    keywords: t.maybe(t.String),
    customKeywords: t.maybe(t.String),

    volume: t.maybe(t.String),
    issue: t.maybe(t.String),
    pages: t.maybe(t.Number),
    startPage: t.maybe(t.String),
    endPage: t.maybe(t.String),
    editors: t.maybe(t.String),

    pubPlace: t.maybe(t.String),
    publisher: t.maybe(t.String),

    DOI: t.maybe(t.String),

    meshTerms: t.maybe(t.String),
    lastLitSearch: t.maybe(t.Object), // {"day": 12, "month": 1, "year": 2020}
    producer: t.maybe(t.Object), //{"cochrane": true, "campbell": true, issue: 2, year: 3}

    isEpocReview: t.maybe(t.Boolean),
    isHotDocs: t.maybe(t.Boolean),

    pdfLinks: t.maybe(t.Object), // {"en": "S3 file upload url"}
    hyperlinks: t.maybe(t.Object), // {"en": "http url to pdf"}

    abstracts: t.maybe(t.Object), // {{"PubMed", ""}, {"Cochrane Library", ""}, ...}
    summaries: t.maybe(t.Object), // {{"Australasian Cochrane Centre Policy Liaison Initiative", ""}, {"Cochrane Library", ""}, ...}

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

    priority: t.maybe(t.String),

    // translating fields
    titles: t.maybe(t.Object),
  },
  {
    defaultProps: {
      source: "Single article from referrals",
      language: "en",
      complicated: false,
      lost: false,
      status: "New article",
      rating: "AMSTAR rating from McMaster Health Forum",
      priority: "low",
      monthlyUpdateDate: "",
      live: false,
      stages: {
        eligibility: { status: "New article" },
        studies: { status: "New article" },
        appraisals: { status: "New article" },
      },
      producer: {},
      filters: [],
      questions: [],
      countryLinks: {},
      titles: {},
    },
  }
);

module.exports = Article;
