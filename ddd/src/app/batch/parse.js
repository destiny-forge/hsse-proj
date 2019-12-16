const journalFields = [
  "referenceType",
  "rating",
  "title", // author
  "authors", // year
  "year", // title
  "journal",
  "volume",
  "issue",
  "pages",
  "startPage",
  "ePubDate",
  "date",
  "typeOfArticle",
  "shortTitle",
  "alternateJournal",
  "ISSN",
  "DOI",
  "originalPublication",
  "rePrintEdition",
  "reviewedItem",
  "legalNote",
  "PMCID",
  "NIHMSID",
  "articleNumber",
  "accessionNumber",
  "callNumber",
  "label",
  "abstract", // keywords
  "keywords", // abstract
  "notes",
  "researchNotes",
  "URL",
  "fileAttachments",
  "authorAddress",
  "figure",
  "caption",
  "accessDate",
  "translatedAuthor",
  "translatedTitle",
  "nameOfDatabase",
  "databaseProvider",
  "language"
];

const parse = csv => {
  let fields = [];

  // Split batchfile into lines (each line contain an article)
  const lines = csv.split("\n");

  // Last Array is always empty (removing here)
  const trimmed = lines.slice(0, lines.length - 1);

  const articles = trimmed.map(line => {
    fields = line.split("\t");
    return Object.assign.apply(
      {},
      journalFields.map((v, i) => ({ [v]: fields[i] }))
    );
  });

  return articles;
};

module.exports = {
  parse
};
