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

const getMonthYear = (monthYear) => {
  let month = monthNames[parseInt(monthYear.split("-")[0]) - 1];
  let year = parseInt(monthYear.split("-"[1]));
  return { month, year };
};

module.export = {
  getMonthYear,
};
