/**
 * Account roles
 */

module.exports = ({ userRepository }) => {
  const add = async (userId, role) => {
    try {
      return userRepository.addRole(userId, role);
    } catch (error) {
      throw new Error(error);
    }
  };

  const remove = async (userId, role) => {
    try {
      return userRepository.removeRole(userId, role);
    } catch (error) {
      throw new Error(error);
    }
  };

  const update = async (userId, roles) => {
    try {
      return userRepository.setRoles(userId, roles);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    add,
    remove,
    update
  };
};
