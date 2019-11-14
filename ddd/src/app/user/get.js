/**
 * Get use-cases for the user feature
 */

module.exports = ({ userRepository }) => {
  const getAll = () => {
    return Promise.resolve()
      .then(() => userRepository.getAll({}))
      .catch(error => {
        throw new Error(error);
      });
  };

  const getById = id => {
    return Promise.resolve()
      .then(() => userRepository.getById(id))
      .catch(error => {
        throw new Error(error);
      });
  };

  const getByEmail = email => {
    return Promise.resolve()
      .then(() => userRepository.getByEmail(email))
      .catch(error => {
        throw new Error(error);
      });
  };

  return {
    getAll,
    getById,
    getByEmail
  };
};
