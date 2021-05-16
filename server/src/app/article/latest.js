const _ = require("underscore");
const { hse, sse } = require("../data");
const hse_ui = require("../i18n/hse/ui");
const sse_ui = require("../i18n/sse/ui");
const cvd_ui = require("../i18n/cvd/ui");

const t_ui = (type, language, key, scope) => {
  let translations = {};
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
  let result = translations.filter(
    (item) => item.key === key && item.scope === scope
  );

  return result.length > 0 ? result[0][language] : "";
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
      //console.log(error);
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

    const hotDocArticles = articles.filter((article) => article.isHotDocs);
    hotDocArticles.forEach((article) => {
      let title = language === "en" ? article.title : article.titles[language];
      const stub = {
        ArticleId: article._id,
        [`Title${language.toUpperCase()}`]: title,
        Title2: article.title,
      };
      latest["hot_Docs_Articles"].push(stub);
    });

    hse.types.forEach((docType, i) => {
      const title = t(docType.legacyKey);
      const typeStub = {
        DocumentTypeID: i,
        [`DocumentTypeName${language.toUpperCase()}`]: title,
        DocumentTypeName2: docType.label,
        document_Types_Articles: [],
      };

      const docTypeArticles = articles.filter(
        (article) =>
          !article.isHotDocs && article.documentType === docType.label
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
    latest["hot_Docs_Articles"] = _.uniq(latest["hot_Docs_Articles"]);
    latest["hot_Docs_Content1"] = t_ui(
      type,
      language,
      "_EvidenceService_HotDocs_Header",
      "Evidence Service"
    );
    latest["hot_Docs_Content2"] = t_ui(
      type,
      language,
      "_EvidenceService_HotDocs_Header2",
      "Evidence Service"
    );
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

    domainItems.forEach((domain, i) => {
      const domainTitle = t(domain.legacyKey);
      const typeStub = {
        DomainID: i,
        DomainName2: domain.title,
        [`DomainName${language.toUpperCase()}`]: domainTitle,
        program_Services_Articles: [],
      };

      const domainArticles = articles.filter(
        (article) => !article.hot_docs && article.filters.includes(domain.key)
      );

      domainArticles.forEach((article) => {
        let title =
          language === "en" ? article.title : article.titles[language];
        const articleStub = {
          ArticleId: article._id,
          [`Title${language.toUpperCase()}`]: title,
          Title2: article.title,
        };

        typeStub["program_Services_Articles"].push(articleStub);
      });

      latest["program_Services_Articles"].push(typeStub);
    });

    // get the month and year from the first article returned
    let dte = new Date(articles[0].liveDate);
    const month = dte.toLocaleString("default", { month: "long" });

    latest["hot_Docs_Articles"] = _.uniq(latest["hot_Docs_Articles"]);
    latest["hot_Docs_Content1"] = t_ui(
      type,
      language,
      "_EvidenceService_HotDocs_Header",
      "Evidence Service"
    );
    latest["hot_Docs_Content2"] = t_ui(
      type,
      language,
      "_EvidenceService_HotDocs_Header2",
      "Evidence Service"
    );
    latest["year"] = dte.getFullYear();
    latest["month"] = month.toLowerCase();

    return latest;
  };

  return {
    latest,
  };
};
