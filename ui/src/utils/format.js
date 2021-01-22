const getYear = (date) => {
  return new Date(Date.parse(date)).getFullYear();
};

const yearMonthDay = (date) => {
  return date.split('T')[0];
};

module.exports = {
  getYear,
  yearMonthDay,
};
