const formatDate = (date) => {
  return (date && date.split('T')[0]) || null;
};

module.exports = {
  formatDate,
};
