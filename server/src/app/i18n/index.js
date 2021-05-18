const hse_ui = require("./hse/ui");
const sse_ui = require("./sse/ui");
const cvd_ui = require("./cvd/ui");

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

module.exports = t_ui;
