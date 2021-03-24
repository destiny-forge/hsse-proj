const esdb = require("./src/infra/search/esdb");
const mappings = require("./src/infra/search/es_templates/article_mappings");

//console.log(mappings);

const article = {
  shortId: "adsf32q414",
  legacyId: 1,
  legacyBatchId: 0,
  batchName: "Initial import",
  type: "hse",
  referenceType: "Journal",
  monthlyUpdateDate: "1900-01-01",
  source: "",
  language: "en",
  lost: false,
  uploaded: "2011-11-08T23:15:05.053Z",
  published: "2011-01-01T06:11:11.000Z",
  title: "Does pay-for-performance improve the quality of health care?",
  journal: "Annals of Internal Medicine",
  authors: "Petersen LA;Woodard LD;Urech T;Daw C;Sookanan S;",
  stages: {
    eligibility: null,
    studies: null,
    appraisals: null,
  },
  status: "New article",
  applied_filters: [
    "conditionProviders",
    "conditionOther",
    "conditionProviderPhysician",
    "conditionMentalHealthAddictions",
    "financial",
    "remuneratingProvider",
    "remuneratingProviderPaymentPenalties",
  ],
  rating: "AMSTAR rating from McMaster Health Forum",
  questions: [],
  complicated: true,
  countryLinks: {
    "United States": {
      id: "184",
      count: "15",
      focus: false,
      links: [],
    },
  },
  producer: {
    cochrane: false,
    campbell: false,
    issue: 0,
    year: 0,
  },
  notes: "",
  priority: "",
  titles: {
    cn: {
      title: "绩效工资是否可以提高卫生保健的质量？",
    },
    es: {
      title:
        "¿El pago por desempeño mejora la calidad de la asistencia sanitaria?",
    },
    pt: {
      title:
        "O pagamento por desempenho melhora a qualidade dos cuidados de saúde?",
    },
    fr: {
      title:
        "Est-ce que le paiement à la performance améliore la qualité des soins de santé?",
    },
  },
  documentType: "Systematic reviews of effects",
  generalFocus: true,
  questionType: "Effectiveness",
  amstarDenominator: 6,
  amstarNumerator: 11,
  noFreeFullText: null,
  notInEnglish: null,
  abstracts: {
    PubMed: "http://www.ncbi.nlm.nih.gov/pubmed/16908917",
    "Cochrane Library": "",
    Publisher: "http://www.annals.org/cgi/content/abstract/145/4/265",
  },
  hyperlinks: {
    en: "",
  },
  summaries: {
    "Australasian Cochrane Centre Policy Liaison Initiative": "",
    "Cochrane Library (plain language summaries)": "",
    "Database of Review of Effects":
      "http://www.crd.york.ac.uk/CRDWeb/ShowRecord.asp?ID=12006008368",
    "Effective Health Care Research Programme Consortium": "",
    "Health-Evidence.ca": "",
    "Health Knowledge Network": "",
    "International Initiative for Impact Evaluation": "",
    "Reproductive Health Library": "",
    "Rx for Change": "",
    SUPPORT:
      "http://supportsummaries.org/support-summaries/show/does-pay-for-performance-improve-the-quality-of-health-carea",
    "European Observatory on Health Systems and Policies": "",
    SHARE: "",
    "Evidence for Equity (E4E)": "",
  },
};

const flatMap = (arr, f) => arr.reduce((r, x) => r.concat(f(x)), []);
const articles = flatMap([article], (doc) => [
  { index: { _index: `test-hse-articlesa` } },
  doc,
]);

const query = {
  match: { legacyId: 1 },
};

Promise.resolve()
  .then(() => esdb.init("test-hse-articlesa", mappings))
  //.then(() => esdb.bulk(articles))
  .then(() => esdb.index("test-hse-articlesa", article))
  .then(() => esdb.index("test-hse-articlesa", article))
  .then(() => esdb.count("test-hse-articlesa"))
  .then(() => esdb.search("test-hse-articlesa", query));
