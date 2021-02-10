/**
 * User import / load
 */

module.exports = ({ userRepository }) => {
  const load = async (user) => {
    try {
      // @TODO - some password fu translation here
      // will be required to ensure that we can properly
      // decrypt and re-encrypt the user passwords so that
      // users can continue to login with the same credentials
      return await userRepository.create(user);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    load,
  };
};
