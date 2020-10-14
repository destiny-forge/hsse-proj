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
  "language",
];

const clean = (fields) => {
  const article = Object.assign.apply({}, fields);
  ["volume", "issue", "pages"].forEach((field) => {
    if (article[field] === "[NOT USED]") {
      delete article[field];
    } else {
      const parsed = parseInt(article[field]);
      if (isNaN(parsed)) {
        delete article[field];
      } else {
        article[field] = parsed;
      }
    }
  });

  ["startPage", "endPage"].forEach((field) => {
    const parsed = parseInt(article[field]);
    if (isNaN(parsed)) {
      delete article[field];
    } else {
      article[field] = parsed;
    }
  });

  ["databaseProvider", "language"].forEach((field) => {
    if (article[field] === undefined) {
      delete article[field];
    }
  });
  return article;
};

const parse = (csv) => {
  let fields = [];

  // Split batchfile into lines (each line contain an article)
  const lines = csv.split("\n");

  // Last Array is always empty (removing here)
  const trimmed = lines.slice(0, lines.length - 1);

  const articles = trimmed.map((line) => {
    fields = line.split("\t");
    return clean(journalFields.map((v, i) => ({ [v]: fields[i] })));
  });

  return articles;
};

module.exports = {
  parse,
};
