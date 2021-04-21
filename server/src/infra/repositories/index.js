const User = require("./user");
const Article = require("./article");
const Batch = require("./batch");
const Eligibility = require("./eligibility");
const Appraisal = require("./appraisal");
const Study = require("./study");
const Subscription = require("./subscription");

module.exports = ({ database }) => {
  const userModel = database.mongo.models.users;
  const articleModel = database.mongo.models.articles;
  const batchModel = database.mongo.models.batches;
  const eligibilityModel = database.mongo.models.eligibility;
  const appraisalModel = database.mongo.models.appraisals;
  const studyModel = database.mongo.models.studies;
  const subscriptionModel = database.mongo.models.subscriptions;
  return {
    userRepository: User({ model: userModel({ database }) }),
    articleRepository: Article({ model: articleModel({ database }) }),
    batchRepository: Batch({ model: batchModel({ database }) }),
    eligibilityRepository: Eligibility({
      model: eligibilityModel({ database }),
    }),
    appraisalRepository: Appraisal({
      model: appraisalModel({ database }),
    }),
    studyRepository: Study({ model: studyModel({ database }) }),
    subscriptionRepository: Subscription({
      model: subscriptionModel({ database }),
    }),
  };
};
