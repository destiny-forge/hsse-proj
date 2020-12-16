/**
 * User update
 */

module.exports = ({ userRepository }) => {
  const update = async ({ _id, email, role }) => {
    try {
      return await userRepository.update(_id, { email, role });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    update,
  };
};
