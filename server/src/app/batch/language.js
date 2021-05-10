const getLanguage = (code) => {
  let language;
  switch (code) {
    case "en":
      language = "English";
      break;
    case "fr":
      language = "French";
      break;
    case "ar":
      language = "Arabic";
      break;
    case "pt":
      language = "Portugese";
      break;
    case "ch":
      language = "Chinese";
      break;
    case "es":
      language = "Spanish";
      break;
    case "other":
      language = "Other";
      break;
    default:
      language = "English";
      break;
  }
  return language;
};

module.exports = {
  getLanguage,
};
