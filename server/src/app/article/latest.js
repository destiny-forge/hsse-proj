const _ = require("underscore");
const { hse, sse } = require("../data");

/**
 * Article latest
 */
module.exports = ({ articleRepository, updateRepository }) => {
  const latest = async (type, language) => {
    try {
      let date = await updateRepository.latestMonthlyUpdate(type);

      if (date === null) {
        return {
          document_Types_Articles: [],
          hot_Docs_Articles: [],
          hot_Docs_Content1: "No articles found",
          hot_Docs_Content2: "",
          month: "",
          year: "",
        };
      }

      date = date.toISOString().split("T")[0].slice(0, 7);

      let latest = [];
      switch (type) {
        case "hse":
          latest = await formatLatestHSE(type, date, language);
          break;
        case "sse":
          latest = await formatLatestSSE(type, date, language);
          break;
        case "cvd":
          latest = [];
          break;
      }
      return latest;
    } catch (error) {
      throw new Error(error);
    }
  };

  const formatLatestHSE = async (type, date, language) => {
    const filters = [];
    const articles = await articleRepository.findByMonthlyUpdate(
      type,
      date,
      filters
    );
    const latest = {
      document_Types_Articles: [],
      hot_Docs_Articles: [],
      hot_Docs_Content1: "",
      hot_Docs_Content2: "",
      month: "",
      year: "",
    };
    const types = {};
    articles.forEach((article) => {
      if (!_.has(types, article.documentType)) {
        types[article.documentType] = [];
      }
      let title = language === "en" ? article.title : article.titles[language];
      const stub = {
        ArticleId: article._id,
        [`Title${language.toUpperCase()}`]: title,
        Title2: article.title,
      };
      if (article.hot_docs) {
        latest["hot_Docs_Articles"].push(stub);
      } else {
        types[article.documentType].push(stub);
      }
    });

    let count = 1;
    for (const [key, value] of Object.entries(types)) {
      const type = {
        DocumentTypeID: count,
        DocumentTypeName2: key,
        [`DocumentTypeName${language.toUpperCase()}`]: translate(key, language),
        document_Types_Articles: value,
      };
      latest["document_Types_Articles"].push(type);
      count++;
    }

    // get the month and year from the first article returned
    let dte = new Date(articles[0].liveDate);
    const month = dte.toLocaleString("default", { month: "long" });

    // get translations for hot_docs_content
    latest["hot_Docs_Content1"] = "wtf";
    latest["hot_Docs_Content2"] = "wtf2";
    latest["year"] = dte.getFullYear();
    latest["month"] = month.toLowerCase();

    return latest;
  };

  const formatLatestSSE = async (type, date, language) => {
    const domainItems = sse.tree.checkedDomain.items[0].children;
    const filters = _.pick(domainItems, "key");

    const articles = await articleRepository.findByMonthlyUpdate(
      type,
      date,
      filters
    );

    const latest = {
      program_Services_Articles: [],
      hot_Docs_Articles: [],
      hot_Docs_Content1: "",
      hot_Docs_Content2: "",
      month: "",
      year: "",
    };

    const hotDocArticles = articles.filter((article) => article.hot_docs);
    hotDocArticles.forEach((article) => {
      const stub = {
        ArticleId: article._id,
        [`Title${language.toUpperCase()}`]: title,
        Title2: article.title,
      };
      latest["hot_Docs_Articles"].push(stub);
    });

    const types = {};
    domainItems.forEach((domain) => {
      //const title = translate(domain.legacyKey, language);
      if (!_.has(types, domain.title)) {
        types[domain.title] = [];
      }
      const domainArticles = articles.filter(
        (article) => !article.hot_docs && article.filters.includes(domain.key)
      );

      //console.log(domainArticles);

      domainArticles.forEach((article) => {
        let title =
          language === "en" ? article.title : article.titles[language];
        const stub = {
          ArticleId: article._id,
          [`Title${language.toUpperCase()}`]: title,
          Title2: article.title,
        };

        types[domain.title].push(stub);
      });
    });

    let count = 1;
    for (const [key, value] of Object.entries(types)) {
      const type = {
        DomainID: count,
        DomainName2: key,
        [`DomainName${language.toUpperCase()}`]: translate(key, language),
        program_Services_Articles: value,
      };
      latest["program_Services_Articles"].push(type);
      count++;
    }

    // get the month and year from the first article returned
    let dte = new Date(articles[0].liveDate);
    const month = dte.toLocaleString("default", { month: "long" });

    // get translations for hot_docs_content
    latest["hot_Docs_Articles"] = _.uniq(latest["hot_Docs_Articles"]);
    latest["hot_Docs_Content1"] = "wtf";
    latest["hot_Docs_Content2"] = "wtf2";
    latest["year"] = dte.getFullYear();
    latest["month"] = month.toLowerCase();

    return latest;
  };

  //@TODO - load translations json file and perform
  //lookups for these keys - this will be needed in
  // multiple places so make a utility function out
  // of it and load it as a singleton in container.js
  const translate = (key, language) => {
    return key;
  };

  return {
    latest,
  };
};
