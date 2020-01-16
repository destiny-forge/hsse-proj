/**
 * Eligibility list
 */
module.exports = ({ eligibilityRepository }) => {
  const list = async type => {
    try {
      // TODO: change this to look up on profile, for now let's get all

      // if (!type || (type !== "sse" && type !== "hse")) {
      //   return {
      //     error: "A valid article type is required"
      //   };
      // }
      // return await eligibilityRepository.findByType(type);
      return await eligibilityRepository.getAll();
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list
  };
};
