const getYear = (date) => {
  return new Date(Date.parse(date)).getFullYear();
};

module.exports = {
  getYear,
};
