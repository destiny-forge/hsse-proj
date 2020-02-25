const User = require("./user");
const Article = require("./article");
const Batch = require("./batch");
const Eligibility = require("./eligibility");
const Appraisal = require("./appraisal");

module.exports = ({ database }) => {
  const userModel = database.mongo.models.users;
  const articleModel = database.mongo.models.articles;
  const batchModel = database.mongo.models.batches;
  const eligibilityModel = database.mongo.models.eligibility;
  const appraisalModel = database.mongo.models.appraisal;
  return {
    userRepository: User({ model: userModel({ database }) }),
    articleRepository: Article({ model: articleModel({ database }) }),
    batchRepository: Batch({ model: batchModel({ database }) }),
    eligibilityRepository: Eligibility({
      model: eligibilityModel({ database })
    }),
    appraisalRepository: Appraisal({
      model: appraisalModel({ database })
    })
  };
};
