/**
 * Managing user roles
 */
module.exports = ({ userRepository }) => {
  const add = (userId, role) => {
    return Promise.resolve()
      .then(() => userRepository.addRole(userId, role))
      .catch(error => {
        throw new Error(error);
      });
  };

  const remove = (userId, role) => {
    return Promise.resolve()
      .then(() => userRepository.removeRole(userId, role))
      .catch(error => {
        throw new Error(error);
      });
  };

  const update = (userId, roles) => {
    return Promise.resolve()
      .then(() => userRepository.setRoles(userId, roles))
      .catch(error => {
        throw new Error(error);
      });
  };

  return {
    add,
    remove,
    update
  };
};
