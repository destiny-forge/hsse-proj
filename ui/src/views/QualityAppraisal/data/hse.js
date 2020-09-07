const questions = [
  {
    key: 'questionPriori',
    title: "Was an 'a priori' design provided?",
    description:
      'The research question and inclusion criteria should be established before the conduct of the review. \r\nNote: Need to refer to a protocol, ethics approval, or pre-determined/a priori published research objectives to score a “yes.“',
    value: '',
  },
  {
    key: 'questionDuplicate',
    title: 'Was there duplicate study selection and data extraction?',
    description:
      'There should be at least two independent data extractors and a consensus procedure for disagreements should be in place. Note: 2 people do study selection, 2 people do data extraction, consensus process or one person checks the other’s work.',
    value: '',
  },
  {
    key: 'questionComprehensiveSearch',
    title: 'Was a comprehensive literature search performed?',
    description:
      'At least two electronic sources should be searched. The report must include years and databases used (e.g., Central, EMBASE, and MEDLINE). Key words and/or MESH terms must be stated and where feasible the search strategy should be provided. All searches should be supplemented by consulting current contents, reviews, textbooks, specialized registers, or experts in the particular field of study, and by reviewing the references in the studies found. \r\nNote: If at least 2 sources + one supplementary strategy used, select “yes” (Cochrane register/Central counts as 2 sources; a grey literature search counts as supplementary).',
    value: '',
  },
  {
    key: 'questionPublicationStatus',
    title:
      'Was the status of publication (i.e. grey literature) not used as an inclusion criterion?',
    description:
      'The authors should state that they searched for reports regardless of their publication type. The authors should state whether or not they excluded any reports (from the systematic review), based on their publication status, language etc. \r\nNote: If review indicates that there was a search for “grey literature” or “unpublished literature,” indicate “yes.” SIGLE database, dissertations, conference proceedings, and trial registries are all considered grey for this purpose. If searching a source that contains both grey and non-grey, must specify that they were searching for grey/unpublished lit.',
    value: '',
  },
  {
    key: 'questionListOfStudies',
    title: 'Was a list of studies (included and excluded) provided?',
    description:
      'A list of included and excluded studies should be provided. \r\nNote: Acceptable if the excluded studies are referenced. If there is an electronic link to the list but the link is dead, select “no.”',
    value: '',
  },
  {
    key: 'questionCharacteristicsProvided',
    title: 'Were the characteristics of the included studies provided? ',
    description:
      'In an aggregated form such as a table, data from the original studies should be provided on the participants, interventions and outcomes. The ranges of characteristics in all the studies analyzed e.g., age, race, sex, relevant socioeconomic data, disease status, duration, severity, or other diseases should be reported. \r\nNote: Acceptable if not in table format as long as they are described as above.',
    value: '',
  },
  {
    key: 'questionScientificQualityAssessed',
    title:
      'Was the scientific quality of the included studies assessed and documented?',
    description:
      '`A priori` methods of assessment should be provided (e.g., for effectiveness studies if the author(s) chose to include only randomized, double-blind, placebo controlled studies, or allocation concealment as inclusion criteria); for other types of studies alternative items will be relevant. \r\nNote: Can include use of a quality scoring tool or checklist, e.g., Jadad scale, risk of bias, sensitivity analysis, etc., or a description of quality items, with some kind of result for EACH study (“low” or “high” is fine, as long as it is clear which studies scored “low” and which scored “high”; a summary score/range for all studies is not acceptable).',
    value: '',
  },
  {
    key: 'questionScientificQualityAppropriate',
    title:
      'The results of the methodological rigor and scientific quality should be considered in the analysis and the conclusions of the review, and explicitly stated in formulating recommendations. \r\nNote: Might say something such as “the results should be interpreted with caution due to poor quality of included studies.” Cannot score “yes” for this question if scored “no” for question 7.',
    description: '',
    value: '',
  },
  {
    key: 'questionMethodsAppropriate',
    title:
      'Were the methods used to combine the findings of studies appropriate?',
    description: '',
    value: '',
  },
  {
    key: 'questionPublicationBias',
    title: 'Was the likelihood of publication bias assessed?',
    description:
      'An assessment of publication bias should include a combination of graphical aids (e.g., funnel plot, other available tests) and/or statistical tests (e.g., Egger regression test, Hedges-Olken). \r\nNote: If no test values or funnel plot included, score “no”. Score “yes” if mentions that publication bias could not be assessed because there were fewer than 10 included studies.',
    value: '',
  },
  {
    key: 'questionConflictOfInterest',
    title: 'Was the conflict of interest included?',
    description:
      'Potential sources of support should be clearly acknowledged in both the systematic review and the included studies. \r\nNote: To get a “yes,” must indicate source of funding or support for the systematic review AND for each of the included studies.',
    value: '',
  },
];

export default {
  questions,
};
