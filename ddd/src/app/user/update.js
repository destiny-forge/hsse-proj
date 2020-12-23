/**
 * User update
 */

module.exports = ({ userRepository }) => {
  const update = async ({ _id, user }) => {
    try {
      console.log(_id, user);
      return await userRepository.update(_id, user);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    update,
  };
};
