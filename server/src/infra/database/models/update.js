module.exports = ({ database }) => {
  const latestMonthlyUpdate = async (type) => {
    try {
      const result = await database
        .get()
        .collection("updates")
        .find({ type: { $eq: type }, live: true })
        .sort({ date: -1 })
        .limit(1)
        .toArray();
      return result[0];
    } catch (e) {
      throw e;
    }
  };

  return {
    latestMonthlyUpdate,
  };
};
