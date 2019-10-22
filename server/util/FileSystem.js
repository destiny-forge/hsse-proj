const fs = require('fs');
const path = require('path');

/*
module.exports = filename =>
  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'data', filename), 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data.split('\n').map(row => row.split('\t')));
    });
  });

*/

/*
var readMe = fs.readFileSync('hse_cochrane_reviews_2018-10_2018-11.txt', 'utf8');
fs.readFileSync('writeMe.txt', readMe);


fs.readFile('hse_cochrane_reviews_2018-10_2018-11.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

*/

fs.readFile('HSEBatchfileSamples\\hse_reviews_plus_2017-09-05.txt', 'utf8', (err, data) => {
    
    if (err) {
        console.log(err);
    }
/*

*** Fields from Journal batch ***

[
referenceType
rating
author
year
title
journal
volume
issue
pages
startPage
ePubDate
date
typeOfArticle
shortTitle
alternateJournal
ISSN
DOI
originalPublication
rePrintEdition
reviewedItem
legalNote
PMCID
NIHMSID
articleNumber
accessionNumber
callNumber
label
keywords
abstract
notes
researchNotes
URL
fileAttachments
authorAddress
figure
caption
accessDate
translatedAuthor
translatedTitle
nameOfDatabase
databaseProvider
language
*/

const journalFields = 
[
"referenceType",
"rating",
"title", //author
"authors", // year
"year",  // title
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


/*

*** For reference type ‘Book:’

ReferenceType
rating
author
year
title
seriesEditor
seriesTitle
placePublished
publisher
volume
numberOfVolumes
seriesVolume
numberOfPages
pages
editor
edition
date
typeOfWork
translator
shortTitle
abbreviation
ISBN
DOI
originalPublication
reprintEdition
titlePrefix
reviewer
accessionNumber
callNumber
label
keywords
Abstract
notes
researchNotes
URL
fileAttachments
authorAddress
figure
caption
acccessDate
translatedAuthor
translatedTitle
nameOfDatabase
databaseProvider
language

*/
 

/*

*** For reference type ‘Book section:’

referenceType
rating
author
year
title
editor
bookTitle
placePublished
publisher
volume
numberOfVolumes
seriesVolume
pages
chapter
seriesEditor
seriesTitle
edition
translator
shortTitle
abbreviation
ISBN
DOI
originalPublication
reprintEdition
reviewedItem
section
titlePrefix
reviewer
packagingMethod
accessionNumber
callNumber
label
keywords
abstract
notes
researchNotes
URL
fileAttachments
authorAddress
figure
caption
accessDate
translatedAuthor
translatedTitle
nameOfDatabase
databaseProvider
language

*/


    // data.split('\n').map(row => row.split('\t'));
    //const lines = data.split('\n');
    //console.log(`Length of articles is: ${lines.length}`);
    //const fields = lines[2].split('\t');
    //console.log(`Amount of fields are: ${fields.length}`);
    //console.log(lines);
    //console.log(lines[2].split('\t'));


    const articles = data.split('\n');
    const trimmedArticles = articles.slice(0, articles.length - 1);

    const finalResult = trimmedArticles.map(line => {
      fields = line.split('\t');
      return Object.assign.apply({}, journalFields.map( (v, i) => ( {[v]: fields[i]} ) ) );
    });

    console.log(finalResult);
    const jsonFinalResult = JSON.stringify(finalResult);

    fs.writeFile('articlesArray.txt', jsonFinalResult, function(err, data){
      if (err) console.log(err);
      console.log("Successfully Written to File.");
  });



    //var result =  Object.assign.apply({}, journalFields.map( (v, i) => ( {[v]: fields[i]} ) ) );

    //const final = Object.assign([...objectArray, result]);

    //console.log(final);

});