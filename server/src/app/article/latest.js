const _ = require("underscore");
const { hse, sse } = require("../data");
const hse_ui = require("../i18n/hse/ui");
const sse_ui = require("../i18n/sse/ui");
const cvd_ui = require("../i18n/cvd/ui");

const t_ui = (type, key, scope) => {
  const translations = {};
  switch (type) {
    case "hse":
      translations = hse_ui;
      break;
    case "sse":
      translations = sse_ui;
      break;
    case "cvd":
      translations = cvd_ui;
      break;
  }
  return (
    translations.filter((item) => item.key === key && item.scope === scope)[
      language
    ] || ""
  );
};
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
    const translations = require(`../i18n/${type}/${language}`);
    const t = (key) => {
      return translations.filters[key];
    };

    const articles = await articleRepository.findByMonthlyUpdate(
      type,
      date,
      []
    );
    const latest = {
      document_Types_Articles: [],
      hot_Docs_Articles: [],
      hot_Docs_Content1: "",
      hot_Docs_Content2: "",
      month: "",
      year: "",
    };

    const hotDocArticles = articles.filter((article) => article.hot_docs);
    hotDocArticles.forEach((article) => {
      let title = language === "en" ? article.title : article.titles[language];
      const stub = {
        ArticleId: article._id,
        [`Title${language.toUpperCase()}`]: title,
        Title2: article.title,
      };
      latest["hot_Docs_Articles"].push(stub);
    });

    let count = 1;
    hse.types.forEach((docType) => {
      const title = t(docType.legacyKey);
      const typeStub = {
        DocumentTypeID: count,
        [`DocumentTypeName${language.toUpperCase()}`]: title,
        DocumentTypeName2: docType.label,
        document_Types_Articles: [],
      };

      const docTypeArticles = articles.filter(
        (article) => !article.hot_docs && article.documentType === docType.label
      );

      docTypeArticles.forEach((article) => {
        let title =
          language === "en" ? article.title : article.titles[language];
        const articleStub = {
          ArticleId: article._id,
          [`Title${language.toUpperCase()}`]: title,
          Title2: article.title,
        };
        typeStub["document_Types_Articles"].push(articleStub);
      });

      latest["document_Types_Articles"].push(typeStub);
    });

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
    const translations = require(`../i18n/${type}/${language}`);
    const t = (key) => {
      return translations.filters[key];
    };
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
      let title = language === "en" ? article.title : article.titles[language];
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
        [`DomainName${language.toUpperCase()}`]: t(key),
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

  return {
    latest,
  };
};
