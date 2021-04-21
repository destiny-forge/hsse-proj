const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getYearMonth = (yearMonth) => {
  let year = parseInt(yearMonth.split("-"[0]));
  let month = monthNames[parseInt(yearMonth.split("-")[1]) - 1];
  return { year, month };
};

module.exports = {
  getYearMonth,
};
