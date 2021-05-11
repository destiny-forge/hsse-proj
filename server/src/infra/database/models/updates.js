module.exports = ({ database }) => {
  const last = async (type) => {
    try {
      const results = await database
        .get()
        .collection("articles")
        .find({ type: { $eq: type }, live: true })
        .sort({ date: -1 });
      return results[0].date;
    } catch (e) {
      throw e;
    }
  };

  return {
    last,
  };
};
