const mongoose = require('mongoose');
const Authentication = require('../authentication');
const { hasRole } = require('../../util/auth');

const SSEArticleModelClass = mongoose.model('SSEArticles');

exports.listArticles = async (req, res) => {
  SSEArticleModelClass.find({ complicated: false })
    .or([{ _eligibilityFiltersJunior: null }, { _eligibilityFiltersSenior: null }])
    .exec((err, articles) => {
      if (err) {
        return res.send(err);
      }
      if (!articles) {
        return res.status(404).send({
          message: 'No article in the Administrator Eligibility Filters Article Queue',
        });
      }
      return res.status(200).send(articles);
    });
};

exports.addArticleToJuniorEligibilityFilterer = async (req, res) => {
  const { articleId } = req.params;

  const user = await Authentication.getUserFromToken(req.headers.authorization);

  if (!mongoose.Types.ObjectId.isValid(articleId)) {
    return res.status(400).send({
      message: 'Article is invalid',
    });
  }

  if (!hasRole('juniorfilterer', user) && !hasRole('seniorfilterer', user)) {
    return res.status(400).send({
      message: 'User does not have permission',
    });
  }

  SSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
    if (article._eligibilityFiltersJunior !== null) {
      return res.status(404).send({
        message: 'A junior filterer has already been added for this article',
      });
    }

    article._eligibilityFiltersJunior = user._id;
    article._eligibilityFiltersJuniorEmail = user.email;

    await article.save();
    return res.status(200).send({
      message: 'Junior eligibility and filterer user added',
    });
  });
};

exports.addArticleToSeniorEligibilityFilterer = async (req, res) => {
  const { articleId } = req.params;
  const user = await Authentication.getUserFromToken(req.headers.authorization);

  if (!mongoose.Types.ObjectId.isValid(articleId)) {
    return res.status(400).send({
      message: 'Article is invalid',
    });
  }

  if (!hasRole('seniorfilterer', user)) {
    return res.status(400).send({
      message: 'User does not have permission',
    });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  SSEArticleModelClass.findById(articleId, async (err, article) => {
    if (err) {
      return res.send(err);
    }

    if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }

    if (article._eligibilityFiltersSenior !== undefined) {
      return res.status(404).send({
        message: 'A senior filterer has already been added for this article',
      });
    }

    article._eligibilityFiltersSenior = user._id;
    article._eligibilityFiltersSeniorEmail = user.email;

    await article.save();
    return res.status(200).send({
      message: 'Senior eligibility and filterer user added',
    });
  });
};
