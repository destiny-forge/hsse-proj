module.exports = {
  properties: {
    id: {
      type: "keyword",
    },
    shortId: {
      type: "keyword",
    },
    legacyId: {
      type: "integer",
    },
    legacyBatchId: {
      type: "integer",
    },
    batchName: {
      type: "text",
    },
    type: {
      type: "keyword",
    },
    monthlyUpdateDate: {
      type: "keyword",
    },
    title: {
      type: "text",
    },
    applied_filters: {
      type: "keyword",
    },
    documentType: {
      type: "keyword",
    },
    citations: {
      type: "nested",
    },
    abstract: {
      type: "text",
    },
    keywords: {
      type: "text",
    },
    customKeywords: {
      type: "text",
    },
    editors: {
      type: "text",
    },
    publisher: {
      type: "text",
    },
    isEpocReview: {
      type: "boolean",
    },
    isHotDocs: {
      type: "boolean",
    },
    abstracts: {
      type: "nested",
    },
    summaries: {
      type: "nested",
    },
    year: {
      type: "keyword",
    },
    date: {
      type: "date",
    },
    // source: {
    //   type: "keyword",
    // },
    // language: {
    //   type: "string",
    // },
    // lost: {
    //   type: "boolean",
    // },
    // published: {
    //   type: "date",
    // },
    // harvested: {
    //   type: "date",
    // },
    // journal: {
    //   type: "keyword",
    // },
    // authors: {
    //   type: "text",
    // },
    // status: {
    //   type: "keyword",
    // },
    // questionType: {
    //   type: "keyword",
    // },
    // generalFocus: {
    //   type: "boolean",
    // },
    // rating: {
    //   type: "string",
    // },
    // questions: {
    //   type: "nested",
    // },
    // amstarNumerator: {
    //   type: "integer",
    // },
    // amstarDenominator: {
    //   type: "integer",
    // },
    // noFreeFullText: {
    //   type: "boolean",
    // },
    // notInEnglish: {
    //   type: "boolean",
    // },
    // complicated: {
    //   type: "boolean",
    // },
    // countryLinks: {
    //   type: "nested",
    // },

    // referenceType: {
    //   type: "keyword",
    // },
    // authorAddress: {
    //   type: "keyword",
    // },

    // volume: {
    //   type: "integer",
    // },
    // issue: {
    //   type: "integer",
    // },
    // pages: {
    //   type: "integer",
    // },
    // startPage: {
    //   type: "integer",
    // },
    // endPage: {
    //   type: "integer",
    // },
    // pubPlace: {
    //   type: "keyword",
    // },
    // DOI: {
    //   type: "text",
    // },
    // meshTerms: {
    //   type: "text",
    // },
    // lastLitSearch: {
    //   type: "nested",
    //   properties: {
    //     day: {
    //       index: "not_analyzed",
    //       type: "integer",
    //     },
    //     month: {
    //       index: "not_analyzed",
    //       type: "integer",
    //     },
    //     year: {
    //       index: "not_analyzed",
    //       type: "integer",
    //     },
    //   },
    // },
    // producer: {
    //   type: "keyword",
    // },
    // pdfLinks: {
    //   type: "nested",
    // },
    // hyperlinks: {
    //   type: "nested",
    // },

    // viewCount: {
    //   type: "double",
    // },
    // qualityValue: {
    //   type: "keyword",
    // },
    // journalImpactFactor: {
    //   type: "double",
    // },
    // includedStudiesCount: {
    //   type: "double",
    // },
    // citationsCount: {
    //   type: "double",
    // },
    // anyUserFriendlySummary: {
    //   type: "double",
    // },
    // anyEvidence: {
    //   type: "double",
    // },
    // domain: {
    //   type: "keyword",
    // },
  },
};
