const { User } = require('src/domain/user');

/**
 * Update use-cases for the user feature
 */

module.exports = ({ userRepository }) => {
  const update = ({ id, user }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const domainUser = User(user);
        await userRepository.update(domainUser, {
          where: { id }
        });

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
