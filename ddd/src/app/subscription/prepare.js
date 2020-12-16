const ejs = require("ejs");
const _ = require("underscore");
const DateHelper = require("./date");
const { hse, sse } = require("./data");

/**
 * Generate HTML output for monthly email manager
 * by massaging the article data into a flattened
 * structure so limited filtering is required reducing
 * the complexity of the frontend logic for outputting
 * HTML
 */

const prepare = async (articleRepository, recipient, monthYear) => {
  if (!recipient) {
    return {
      error: "A valid recipient is required",
    };
  }

  try {
    // Note: the $ shouldn't exist here - let's see
    // what we can do to create a function directly
    // designed to query getMonthlyArticles(type, filters, monthlyUpdateDate)
    const articles = articleRepository.find({
      type: { $eq: recipient.type },
      filters: { $in: recipient.filters },
      monthlyUpdateDate: { $eq: monthYear },
    });

    let { month, year } = DateHelper.getMonthYear(monthYear);
    let hotDocs = articles.filter((article) => article.hotDocs === true);
    let filters = recipient.type === "hse" ? hse.filters : sse.filters;
    filters = filters
      .filter((f) => _.contains(recipient.filters, f.key))
      .map((f) => f.title);

    const data = {
      month,
      year,
      hotDocs,
      filters,
      articles: {},
    };

    let filterList = _.uniq(articles.map((article) => article.documentType));
    filterList.forEach((filter) => {
      data.articles[filter] = articles.filter(
        (article) => article.documentType === filter
      );
    });

    let template = `templates/${recipient.type}-monthly-email.html`;
    let html = ejs.renderFile(template, data);

    console.log(html);
    return html;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = prepare;

// let data = {
//   month: "November",
//   year: "2020",
//   /* Note: Get these from the array of documents that match the users filters */
//   types: [
//     "Systematic reviews of effects",
//     "Systematic reviews addressing other questions",
//     "Systematic reviews in progress",
//     "Economic evaluations and costing studies",
//   ],
//   subtypes: ["General", "Specific"],
//   filters: [
//     "Programs and services",
//     "Children and youth services",
//     "Adoption services",
//     "Caregiver support",
//     "Early childhood development services",
//     "Special needs services",
//     "Student support services",
//     "Parent/legal guardian support services",
//     "Child protection",
//     "Citizenship",
//     "Admissibility, security and visa services",
//     "Border services",
//     "Refugee services",
//     "Temporary residence permits",
//     "Permanent residence permits",
//     "Citizenship grants",
//     "Settlement/re-settlement",
//     "Civic engagement/volunteering",
//     "Civic/cultural integration",
//     "Undocumented individuals",
//     "Migration",
//     "Detention, deportation and extradition",
//     "Sub-national cooperation",
//     "International cooperation",
//     "Climate action",
//     "Energy-use reductions",
//     "Buildings",
//     "Energy production",
//     "Households",
//     "Industries",
//     "Land use",
//     "Tourism",
//     "Transport",
//     "Low- or zero-carbon electricity supply",
//     "Nuclear power",
//     "Renewable energy",
//     "Electrification and other fuel switching",
//     "Appliances",
//     "Supporting infrastructure",
//     "Vehicles",
//     "Non-energy emission solutions",
//     "Bio-sequestration",
//     "Carbon capture and storage",
//     "Fugitive-emission reduction",
//     "Industrial-process improvements",
//     "Reuse and recycling",
//     "Climate-change risk management",
//     "Financial",
//     "Human",
//     "Property",
//     "Settlement",
//     "Community and social services",
//     "Accessibility services",
//     "Disability services",
//     "Problem gambling services",
//     "Other social services",
//     "Community services",
//     "Community development",
//     "Emergency response and preparedness",
//     "Consumer protection",
//     "Consumer awareness and education",
//     "Consumer advocacy and rights",
//     "Personal financial services standards",
//     "Advertising and marketing standards",
//     "Consumer promotion standards",
//     "Responsible consumption initiatives",
//     "Product safety",
//     "Fraud",
//     "Privacy",
//     "Competition supports",
//     "E-commerce and the sharing economy",
//     "Culture and gender",
//     "Arts",
//     "Heritage",
//     "Cultural industries",
//     "Cultural protectionism",
//     "Cultural competency training",
//     "Multiculturalism",
//     "Gender mainstreaming",
//     "Gender equality",
//     "Human rights",
//     "Economic development and growth",
//     "Access to finance",
//     "Area-based initiatives",
//     "Broadband access",
//     "Business advice",
//     "Housing stock renewal",
//     "Human capital investments",
//     "Innovation supports",
//     "Public space improvements",
//     "Sport/culture events and facilities",
//     "Transportation enhancements",
//     "General fiscal policy tools",
//     "General monetary policy tools",
//     "General trade policy tools",
//     "Education",
//     "Pre-primary education",
//     "Primary education",
//     "Secondary education",
//     "Tertiary/higher education",
//     "Academic planning",
//     "Revenue streams",
//     "Tuition setting and subsidy",
//     "Marketing",
//     "Admissions and recruitment",
//     "Streaming",
//     "Curriculum",
//     "Literacy training",
//     "Apprenticeships",
//     "Teaching",
//     "Assessment",
//     "Student engagement",
//     "Parent/legal guardian engagement",
//     "Teacher/faculty engagement",
//     "Community engagement",
//     "Prospective employers engagement",
//     "Employment",
//     "Job training/retraining",
//     "Wages",
//     "Benefits",
//     "Employment conditions",
//     "Displaced workers",
//     "Unemployment",
//     "Unpaid labour",
//     "Workplace safety and prevention",
//     "Workplace violence and harassment",
//     "Unions and collective bargaining",
//     "Labour-market interventions",
//     "Industry-level interventions",
//     "Energy supply",
//     "Biofuel",
//     "First-generation biofuels",
//     "Second-generation biofuels",
//     "Coal",
//     "Hydro-electricity",
//     "Pumped storage",
//     "Reservoir",
//     "Run-of-river",
//     "Tidal range",
//     "Tidal stream",
//     "Natural gas",
//     "Nuclear energy",
//     "Petroleum products",
//     "Solar power",
//     "Wind power",
//     "Non-carbon fuel",
//     "Ammonia",
//     "Hydrogen",
//     "Geothermal",
//     "Electricity generation",
//     "Heating and heating systems",
//     "Heat pump",
//     "Waste (to) energy",
//     "Biological treatment",
//     "Thermochemical treatment",
//     "Co-generation",
//     "Power and heat",
//     "Power, heat and cooling (trigeneration)",
//     "Power, heat, cooling and other products (polygeneration)",
//     "Energy storage",
//     "Domestic",
//     "Industrial",
//     "Energy systems",
//     "Energy mix",
//     "Energy efficiency initiatives",
//     "Grid design",
//     "On-and off- grid source balancing",
//     "Supply security",
//     "Environmental conservation",
//     "Air",
//     "Land",
//     "Land-use planning",
//     "Parks and other protected areas",
//     "Water",
//     "Freshwater (lakes &amp; rivers)",
//     "Seas (marine &amp; coasts, including coastal erosion) &amp; their catchments",
//     "Biodiversity",
//     "Fauna protection",
//     "Flora protection",
//     "Conservation status assessment",
//     "Sustainable harvesting",
//     "Recycling",
//     "Personal",
//     "Industrial",
//     "Restoration",
//     "Environmental remediation",
//     "Land restoration",
//     "Land rehabilitation",
//     "Waste",
//     "Hazardous solid, liquid or other waste",
//     "Non-hazardous solid, liquid or other waste",
//     "Environmental resilience",
//     "Social",
//     "Economic",
//     "Institutional",
//     "Physical",
//     "Natural",
//     "Environmental-threats management",
//     "Fires",
//     "Invasive species",
//     "Light",
//     "Noise",
//     "Financial protection",
//     "Social assistance",
//     "Minimum wage",
//     "Wage disparity limitations",
//     "Employment/unemployment insurance",
//     "Pensions and allowances",
//     "Poverty reduction",
//     "Goods and services subsidy",
//     "Guaranteed minimum income",
//     "Other income re-distribution",
//     "Income reporting",
//     "Asset reporting",
//     "Food safety and security",
//     "Food access",
//     "Nutritional awareness and education",
//     "Food aid",
//     "Food standards",
//     "Food import/export",
//     "International food relief",
//     "Government services",
//     "Identification, licensing and registration",
//     "Service awareness and education",
//     "e-Government",
//     "Service coordination",
//     "Government corruption protections",
//     "Government inclusivity protections",
//     "Government accountability protections",
//     "Elections administration",
//     "Housing",
//     "Access to housing",
//     "Temporary housing",
//     "Public/social housing",
//     "Affordable housing",
//     "Housing assistance",
//     "Housing mix",
//     "Housing safety",
//     "Property rights",
//     "Infrastructure",
//     "Capital planning",
//     "Urban planning",
//     "Social infrastructure",
//     "Broadband infrastructure",
//     "Transportation infrastructure",
//     "Waste management infrastructure",
//     "Water and sanitation infrastructure",
//     "Sustainable development",
//     "Capital spending",
//     "Public financing",
//     "Public/private partnerships",
//     "Private financing",
//     "Foreign investment",
//     "Risk management",
//     "Natural resources",
//     "Aquatic life",
//     "Fishing and fisheries",
//     "Aquatic plants including coral",
//     "Water",
//     "Forests",
//     "Timber industries",
//     "Ground-based resources",
//     "Metals",
//     "Minerals",
//     "Petroleum",
//     "Gas",
//     "Wildlife",
//     "Public safety and justice",
//     "Crime prevention",
//     "Crime reduction",
//     "Security services",
//     "National security",
//     "Counter-terrorism",
//     "Military",
//     "Policing",
//     "Court system",
//     "Restorative justice",
//     "Youth justice",
//     "Domestic violence support",
//     "Victim support",
//     "Offender diversion and support",
//     "Sentencing",
//     "Prison administration and management",
//     "Probation and parole",
//     "Community corrections",
//     "Reintegration",
//     "Recreation",
//     "Promotion of recreation",
//     "Public spaces",
//     "Community/recreation programs",
//     "Private recreation",
//     "Competitive sport",
//     "Transportation",
//     "Accessible transportation options",
//     "Congestion management",
//     "Public transportation",
//     "Safety - Pedestrian",
//     "Safety - Cycling",
//     "Safety - Transportation",
//     "Sustainable transportation options",
//     "Transportation subsidies",
//     "Road tolls",
//   ],
//   hotdocs: [
//     {
//       title:
//         "Effects of human-driven water stress on river ecosystems: A meta-analysis",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//     {
//       title:
//         "Increasing public participation and influence in local decision-making to address social determinants of health during times of resource constraint: A systematic review examining initiatives and theories",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//     {
//       title:
//         "Interventions for anxiety in mainstream school-aged children with autism spectrum disorder: A systematic review",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//     {
//       title:
//         "Service needs of young people affected by adverse childhood experiences (ACEs): A systematic review of UK qualitative evidence",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//     {
//       title:
//         "The effectiveness of community-based social innovations for healthy ageing in middle- and high-income countries: A systematic review",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//     {
//       title:
//         "The potential impact of the COVID-19 pandemic on child growth and development: A systematic review",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//   ],
//   articles: [
//     {
//       title:
//         "Effects of human-driven water stress on river ecosystems: A meta-analysis",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//     {
//       title:
//         "Increasing public participation and influence in local decision-making to address social determinants of health during times of resource constraint: A systematic review examining initiatives and theories",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//     {
//       title:
//         "Interventions for anxiety in mainstream school-aged children with autism spectrum disorder: A systematic review",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//     {
//       title:
//         "Service needs of young people affected by adverse childhood experiences (ACEs): A systematic review of UK qualitative evidence",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//     {
//       title:
//         "The effectiveness of community-based social innovations for healthy ageing in middle- and high-income countries: A systematic review",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//     {
//       title:
//         "The potential impact of the COVID-19 pandemic on child growth and development: A systematic review",
//       href:
//         "https://www.socialsystemsevidence.org/articles/296862?Effectsofh&amp;source=search_subscriptions",
//       safeURL:
//         "https://www.google.com/url?q=https://www.socialsystemsevidence.org/articles/296862?Effectsofh%26source%3Dsearch_subscriptions&amp;source=gmail&amp;ust=1606919853692000&amp;usg=AFQjCNEvjwB92e6SV3OkiTNdcqzKsAKwaw",
//     },
//   ],
// };
