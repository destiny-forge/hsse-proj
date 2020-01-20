const { hseFilter, sseFilter } = require("src/domain/eligibility");

const toEntity = eligibility => {
  return eligibility.type === "hse"
    ? hseFilter(eligibility)
    : sseFilter(eligibility);
};

module.exports = {
  toEntity
};
