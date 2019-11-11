const User = require('./user');

module.exports = ({ database }) => {
  const userModel = database.mongo.models.users;
  return {
    userRepository: User({ model: userModel({ database }) })
  };
};
