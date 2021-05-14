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
      if (result.length > 0) {
        return result[0].date;
      }
      return null;
    } catch (e) {
      throw e;
    }
  };

  return {
    latestMonthlyUpdate,
  };
};
