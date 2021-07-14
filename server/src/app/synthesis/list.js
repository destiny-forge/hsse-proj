/**
 * Synthesis listing
 */
module.exports = ({ synthesisRepository }) => {
  const list = async (type, refId) => {
    try {
      // let statuses = ["a", "b", "c"];
      // return await synthesisRepository.findByLanguage(
      //   type,
      //   language,
      //   priority,
      //   statuses
      // );
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list,
  };
};
