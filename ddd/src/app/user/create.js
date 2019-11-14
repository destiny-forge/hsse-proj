const { User } = require('src/domain/user');

/* Note: VALIDATION IS REQUIRED at the domain layer to
ensure domain entities are properly validated before being
persisted to the database!! This must be done as part of 
the instantiation of the User(entity) in my mind
*/

/**
 * Create use-cases for the user feature
 */
module.exports = ({ userRepository }) => {
  const create = ({ user }) => {
    return Promise.resolve()
      .then(() => {
        const password = user.password || 'test';
        const entity = Object.assign({}, user, {
          password
        });
        const domainUser = User(entity);
        return userRepository.create(domainUser);
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  return {
    create
  };
};
