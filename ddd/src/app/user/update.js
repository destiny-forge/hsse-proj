const { User } = require('src/domain/user');

/**
 * Update use-cases for the user feature
 */

module.exports = ({ userRepository }) => {
  const update = ({ id, user }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const domainUser = User(user);
        // note: we should validate the user here if it's not
        // done as part of creating the entity above
        await userRepository.update(id, domainUser);
        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    update
  };
};
