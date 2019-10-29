// const fs = require('fs');
// const path = require('path');

const journalFields = [
  'referenceType',
  'rating',
  'title', // author
  'authors', // year
  'year', // title
  'journal',
  'volume',
  'issue',
  'pages',
  'startPage',
  'ePubDate',
  'date',
  'typeOfArticle',
  'shortTitle',
  'alternateJournal',
  'ISSN',
  'DOI',
  'originalPublication',
  'rePrintEdition',
  'reviewedItem',
  'legalNote',
  'PMCID',
  'NIHMSID',
  'articleNumber',
  'accessionNumber',
  'callNumber',
  'label',
  'abstract', // keywords
  'keywords', // abstract
  'notes',
  'researchNotes',
  'URL',
  'fileAttachments',
  'authorAddress',
  'figure',
  'caption',
  'accessDate',
  'translatedAuthor',
  'translatedTitle',
  'nameOfDatabase',
  'databaseProvider',
  'language',
];

exports.parseHSEJournalFile = (data) => {
  let fields = [];

  // Split batchfile into lines (each line contain an article)
  const articles = data.split('\n');

  // Last Array is always empty (removing here)
  const trimmedArticles = articles.slice(0, articles.length - 1);

  const finalResult = trimmedArticles.map((line) => {
    fields = line.split('\t');
    return Object.assign.apply({}, journalFields.map((v, i) => ({ [v]: fields[i] })));
  });

  return finalResult;
};

exports.parseSSEJournalFile = (data) => {
  let fields = [];

  // Split batchfile into lines (each line contain an article)
  const articles = data.split('\n');

  // Last Array is always empty (removing here)
  const trimmedArticles = articles.slice(0, articles.length - 1);

  const finalResult = trimmedArticles.map((line) => {
    fields = line.split('\t');
    return Object.assign.apply({}, journalFields.map((v, i) => ({ [v]: fields[i] })));
  });

  return finalResult;
};

// parseJournalArray = (articleArray) => {
//   const fieldsArray = articleArray.split('\t');
// };

// exports.parseHSEBook = (data) => {};

// exports.parseHSEBookSection = (data) => {};
