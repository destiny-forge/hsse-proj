const { toEntity } = require("./transform");

module.exports = ({ model }) => {
  const latestMonthlyUpdate = async (...args) => {
    try {
      let lastUpdate = await model.latestMonthlyUpdate(...args);
      return toEntity(lastUpdate);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  return {
    latestMonthlyUpdate,
  };
};
