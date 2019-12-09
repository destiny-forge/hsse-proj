const User = require("./user");
const Article = require("./article");

module.exports = ({ database }) => {
  const userModel = database.mongo.models.users;
  const articleModel = database.mongo.models.articles;
  return {
    userRepository: User({ model: userModel({ database }) }),
    articleRepository: Article({ model: articleModel({ database }) })
  };
};
