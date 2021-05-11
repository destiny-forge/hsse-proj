const { toEntity } = require("./transform");

module.exports = ({ model }) => {
  const last = async (...args) => {
    try {
      let lastUpdate = await model.last(...args);
      return toEntity(lastUpdate);
    } catch (err) {
      throw new Error(err);
    }
  };

  return {
    last,
  };
};
