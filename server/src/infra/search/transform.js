// perform any transformations needed to optimize es indexing
const transform = (article) => {
  delete article._id;
  article.id = article.shortId;
  article.applied_filters = article.filters;
  delete article.filters;

  // cleanup titles
  article["titleEN"] = article.title;
  for (const [key, value] of Object.entries(article.titles)) {
    article[`title${key.toUpperCase()}`] = value.title || "";
  }
  delete article.title;
  delete article.titles;

  // cleanup citations
  for (const [key, value] of Object.entries(article.citations)) {
    article[`citations${key.toUpperCase()}`] = value;
  }
  delete article.citations;

  const getTranslation = (lang, key, data) => {
    // "countriesAR": "لم يتم التبليغ عنه بصورة تفصيلية - ويشير الوصف إلى :أوغندا (32+)  البلدان النامية (1)  كينيا (1)  رواندا (1)  السودان (1)",
    // "countriesCN": "没有具体报告–描述状态：乌干达 (32+)  发展中国家 (1)  肯尼亚 (1)  卢旺达 (1)  苏丹 (1)",
    // "countriesFR": "Pas de description détaillée - Description des pays: Ouganda (32+)  Pays en développement (1)  Kenya (1)  Rwanda (1)  Soudan (1)",
    // "countriesPT": "Não relatado em detalhe - Segundo Descrição:Uganda (32+)  Países em desenvolvimento (1)  Quênia (1)  Ruanda (1)  Sudão (1)",
    // "countriesRU": "Подробности не сообщаются - в описании говорится: Уганда (32+)  Развивающиеся страны (1)  Кения (1)  Руанда (1)  Судан (1)",
    // "countriesES": "No se informó en detalle - La descripción establece lo siguiente:Uganda (32+)  Países en vías de desarrollo (1)  Kenya (1)  Rwanda (1)  Sudán (1)",
    if (key == "Not yet available") {
      return key;
    }
    return lang == "AR"
      ? `(${data.count}) ${key}  `
      : `${key} (${data.count})  `;
  };

  // cleanup countries
  //https://gitlab.com/mcmaster-health-forum/hse-legacy-application/-/blob/master/src/hse-mcmaster/EditArticle.aspx.vb#L1907
  //https://gitlab.com/mcmaster-health-forum/hse-legacy-application/-/blob/master/src/hse-mcmaster/_JSON/ESSearch_Aggregates_results.json
  for (const lang of ["en", "fr", "ar", "cn", "pt", "ru", "es"]) {
    const countryKey = `countries${lang.toUpperCase()}`;
    article[countryKey] = "";
    for (const [key, data] of Object.entries(article.countryLinks)) {
      article[countryKey] += getTranslation(lang, key, data);
    }
    if (article[countryKey]) {
      article[countryKey] = article[countryKey].trim();
    }
  }

  delete article.countryLinks;

  // delete other fields not required to be indexed
  delete article.summaries;
  delete article.abstracts;
  delete article.hyperlinks;
  delete article.producer;
  delete article.DOI;
  delete article.batchName;
  delete article.lost;
  delete article.questions;
  delete article.priority;
  delete article.notes;
  delete article.noFreeFullText;
  delete article.notInEnglish;
  delete article.stages;
  delete article.questionType;
  delete article.generalFocus;

  return article;
};

module.exports = transform;
