const User = require("./user");
const Article = require("./article");
const Batch = require("./batch");

module.exports = ({ database }) => {
  const userModel = database.mongo.models.users;
  const articleModel = database.mongo.models.articles;
  const batchModel = database.mongo.models.batches;
  return {
    userRepository: User({ model: userModel({ database }) }),
    articleRepository: Article({ model: articleModel({ database }) }),
    batchRepository: Batch({ model: batchModel({ database }) })
  };
};
