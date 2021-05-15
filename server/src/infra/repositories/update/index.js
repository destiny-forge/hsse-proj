module.exports = ({ model }) => {
  const latestMonthlyUpdate = async (...args) => {
    try {
      return await model.latestMonthlyUpdate(...args);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  return {
    latestMonthlyUpdate,
  };
};
