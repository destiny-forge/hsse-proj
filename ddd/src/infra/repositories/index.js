const User = require('./user');

module.exports = ({ database }) => {
  console.log(database);
  const userModel = database.mongo.models.users;

  return {
    userRepository: User({ model: userModel, db: database.mongo.db })
  };
};
