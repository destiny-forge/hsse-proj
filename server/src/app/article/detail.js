const t_ui = require("../i18n");
const { hse, sse, country } = require("../data");

/**
 * Article detail query
 */
module.exports = ({ articleRepository }) => {
  const detail = async (id, type, lang) => {
    try {
      let article = {};
      const isNumeric = !isNaN(id);

      if (isNumeric) {
        article = await articleRepository.findByLegacyId(parseInt(id), type);
      } else {
        article = await articleRepository.findById(id);
      }
      article = transform(article, type, lang);

      return article;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const transform = (article, type, language) => {
    const translations = require(`../i18n/${type}/${language}`);
    let t_types = {};
    let types = {};
    switch (type) {
      case "hse":
        types = hse.types;
        break;
      case "sse":
        types = sse.types;
        break;
      case "cvd":
        types = [];
        break;
    }
    types.forEach((typ) => {
      t_types[typ.value] = typ.legacyKey;
    });

    const t_type = (documentType) => {
      const legacyKey = t_types[documentType];
      return translations.filters[legacyKey];
    };

    let labels = getLabels(type, language);
    let fieldsVisible = getFieldVisibility(article.documentType);
    const title = language === "en" ? article.title : article.titles[language];
    const published = article.published.getFullYear();
    const quality = `${article.amstarNumerator}/${article.amstarDenominator}`;
    const quality_note = t_ui(type, language, "cboAMSTAR_4", "");
    const countryLinks = getCountryLinks(article.countryLinks, type, language);
    const abstract = language === "en" ? article.abstract : "";
    const documentType = t_type(article.documentType);
    const priority_areas = [
      {
        priority_areas: null,
        title: t_ui(type, language, "_NotApplicable", ""),
      },
    ];
    const topics = null;
    const themes = null;
    const filters = getFilters(article.filters, type, language);

    return {
      ...article,
      documentType,
      title,
      abstract,
      published,
      quality,
      quality_note,
      countryLinks,
      priority_areas,
      topics,
      themes,
      filters,
      ...labels,
      ...fieldsVisible,
    };
  };

  const getCountryLinks = (countryLinks, type, language) => {
    for (const [_key, value] of Object.entries(countryLinks)) {
      value.links.forEach((link) => {
        if (language !== "en") {
          const translated = t_ui(
            type,
            language,
            "_English_Hyperlink",
            "English Hyperlinks"
          );
          link.name = `${link.name} (${translated})`;
        }
      });
    }
    return countryLinks;
  };

  const getFilters = (filters, type, language) => {
    return [
      [
        {
          domains: [
            {
              domains: [
                {
                  domains: [],
                  title: "Early childhood development services",
                },
              ],
              title: "Children and youth services",
            },
            {
              domains: [
                {
                  domains: [],
                  title: "Literacy training",
                },
                {
                  domains: [],
                  title: "Teaching",
                },
                {
                  domains: [],
                  title: "Pre-primary education",
                },
                {
                  domains: [],
                  title: "Primary education",
                },
              ],
              title: "Education",
            },
          ],
          title: "Programs and services",
        },
        {
          domains: [
            {
              domains: [
                {
                  domains: [],
                  title: "Skills and competencies development",
                },
              ],
              title: "Citizen-targeted strategy",
            },
          ],
          title: "Implementation strategies",
        },
        {
          domains: [
            {
              domains: [],
              title: "4. Quality education",
            },
            {
              domains: [],
              title: "17. Partnerships for the goals",
            },
          ],
          title: "Sustainable Development Goals",
        },
        {
          domains: [
            {
              domains: [
                {
                  domains: [],
                  title: "Children and youth",
                },
              ],
              title: "Populations",
            },
            {
              domains: [
                {
                  domains: [],
                  title: "Education",
                },
              ],
              title: "Outcomes",
            },
          ],
          title: "Perspectives",
        },
      ],
    ];
  };

  const getLabels = (type, language) => {
    return {
      label_abstract: t_ui(type, language, "litAbstract", ""),
      label_author_email: t_ui(type, language, "litAuthorEmail", ""),
      label_citation: t_ui(type, language, "litCitation", "One Page Summary"),
      label_country_focus: t_ui(
        type,
        language,
        "litCountryFocus",
        "One Page Summary"
      ),
      label_country_groupings: t_ui(type, language, "litCountryGroupings", ""),
      label_document_type: t_ui(
        type,
        language,
        "litTypeOfDocument",
        "Advanced Search"
      ),
      label_doi: t_ui(type, language, "litDOI", "One Page Summary"),
      label_domains: t_ui(type, language, "litDomain", "Advanced Search"),
      label_focus: t_ui(type, language, "litFocus", ""),
      label_full_text_report: t_ui(
        type,
        language,
        "litFullTextReport",
        "One Page Summary"
      ),
      label_health_system_topics: t_ui(
        type,
        language,
        "litHealthSystemTopics",
        "One Page Summary"
      ),
      label_initiative_collaboration_short: t_ui(
        type,
        language,
        "litInitiativeCollaborationShort",
        "One Page Summary"
      ),
      label_initiative_translation_short: t_ui(
        type,
        language,
        "litInitiativeTranslationShort",
        "One Page Summary"
      ),
      label_last_year_literature_searched: t_ui(
        type,
        language,
        "litLastYearLiteratureSearched",
        "One Page Summary"
      ),
      label_lmic_focus: t_ui(type, language, "litLMICFocus", "Advanced Search"),
      label_priority_areas: t_ui(type, language, "litPriorityArea", ""),
      label_quality_rating: t_ui(
        type,
        language,
        "litQualityRating",
        "One Page Summary"
      ),
      label_question_type: t_ui(
        type,
        language,
        "litTypeOfQuestion",
        "Advanced Search"
      ),
      label_registry_record: t_ui(
        type,
        language,
        "litRegistryRecord",
        "One Page Summary"
      ),
      label_related_documents: t_ui(
        type,
        language,
        "litRelatedDocuments",
        "One Page Summary"
      ),
      label_scientific_abstract: t_ui(
        type,
        language,
        "litScientificAbstract",
        "One Page Summary"
      ),
      label_studies_conducted_in: t_ui(
        type,
        language,
        "litCountriesInWhichStudiesWereConducted",
        "One Page Summary"
      ),
      label_summary: t_ui(type, language, "litSummary", "One Page Summary"),
      label_targets: t_ui(type, language, "litTarget", ""),
      label_themes: t_ui(type, language, "litTheme", ""),
      label_title: t_ui(type, language, "litTitle", "One Page Summary"),
      label_user_friendly_summary: t_ui(
        type,
        language,
        "litUserFriendlySummary",
        "One Page Summary"
      ),
      label_who_links: t_ui(type, language, "litWHOLinks", ""),
      label_who_regions: t_ui(type, language, "litGlobalRegionalFocus", ""),
      label_year_published: t_ui(
        type,
        language,
        "litYearPublished",
        "One Page Summary"
      ),
    };
  };

  const getFieldVisibility = (documentType) => {
    let fields = {
      themes_visible: true,
      initiative_translation_short_visible: true,
      lmic_focus_visible: true,
      target_visible: true,
      priority_area_visible: true,
      year_published_visible: true,
      studies_conducted_in_visible: true,
      summary_visible: true,
      registry_record_visible: true,
      author_email_visible: true,
      who_links_visible: true,
      who_region_visible: true,
      country_focus_visible: true,
      related_documents_visible: true,
      last_year_literature_searched_visible: true,
      scientific_abstract_visible: true,
      full_text_report_visible: true,
      user_friendly_summary_visible: true,
      quality_rating_visible: true,
      scientific_abstract_literal_visible: true,
      document_summary_visible: false,
    };

    switch (documentType) {
      case "Evidence briefs for policy":
        fields = {
          ...fields,
          target_visible: false,
          priority_area_visible: false,
          year_published_visible: false,
          studies_conducted_in_visible: false,
          summary_visible: false,
          registry_record_visible: false,
          author_email_visible: false,
          who_links_visible: false,
          who_region_visible: false,
        };
        break;
      case "Overviews of systematic reviews":
        fields = {
          ...fields,
          priority_area_visible: false,
          year_published_visible: false,
          country_focus_visible: false,
          summary_visible: false,
          registry_record_visible: false,
          related_documents_visible: false,
          author_email_visible: false,
          who_links_visible: false,
          who_region_visible: false,
        };
        break;
      case "Systematic reviews of effects":
      case "Systematic reviews addressing other questions":
        fields = {
          ...fields,
          priority_area_visible: false,
          year_published_visible: false,
          country_focus_visible: false,
          summary_visible: false,
          registry_record_visible: false,
          author_email_visible: false,
          who_links_visible: false,
          who_region_visible: false,
        };
        break;
      case "Systematic reviews in progress":
        fields = {
          ...fields,
          priority_area_visible: false,
          last_year_literature_searched_visible: false,
          country_focus_visible: false,
          summary_visible: false,
          registry_record_visible: false,
          author_email_visible: false,
          who_links_visible: false,
          who_region_visible: false,
        };
        break;
      case "Systematic reviews being planned":
        fields = {
          ...fields,
          priority_area_visible: false,
          last_year_literature_searched_visible: false,
          country_focus_visible: false,
          summary_visible: false,
          scientific_abstract_visible: false,
          full_text_report_visible: false,
          author_email_visible: false,
          who_links_visible: false,
          who_region_visible: false,
        };
        break;
      case "Economic evaluations":
        fields = {
          ...fields,
          priority_area_visible: false,
          last_year_literature_searched_visible: false,
          studies_conducted_in_visible: false,
          summary_visible: false,
          registry_record_visible: false,
          author_email_visible: false,
          who_links_visible: false,
          who_region_visible: false,
        };
        break;
      case "Health system reforms":
        fields = {
          ...fields,
          priority_area_visible: false,
          last_year_literature_searched_visible: false,
          studies_conducted_in_visible: false,
          summary_visible: false,
          registry_record_visible: false,
          author_email_visible: false,
          who_links_visible: false,
          who_region_visible: false,
        };
        break;
      case "Health system descriptions":
        fields = {
          ...fields,
          target_visible: false,
          priority_area_visible: false,
          last_year_literature_searched_visible: false,
          studies_conducted_in_visible: false,
          user_friendly_summary_visible: false,
          scientific_abstract_visible: false,
          registry_record_visible: false,
          author_email_visible: false,
          who_links_visible: false,
          who_region_visible: false,
        };
        break;
      case "Canadian healthcare renewal document":
        fields = {
          ...fields,
          last_year_literature_searched_visible: false,
          studies_conducted_in_visible: false,
          summary_visible: false,
          registry_record_visible: false,
          scientific_abstract_literal_visible: false,
          document_summary_visible: true,
          who_links_visible: false,
          who_region_visible: false,
        };
        break;
      case "WHO portal document":
        fields = {
          ...fields,
          priority_area_visible: false,
          quality_rating_visible: false,
          user_friendly_summary_visible: false,
          author_email_visible: false,
          studies_conducted_in_visible: false,
        };
        break;
      case "OHSD":
        fields = {
          ...fields,
          last_year_literature_searched_visible: false,
          studies_conducted_in_visible: false,
          summary_visible: false,
          registry_record_visible: false,
          scientific_abstract_literal_visible: false,
          document_summary_visible: true,
          who_links_visible: false,
          who_region_visible: false,
        };
        break;
    }
  };

  return {
    detail,
  };
};
