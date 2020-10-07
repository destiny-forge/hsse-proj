import _ from 'lodash';

export default (article) =>
  new Promise((resolve, reject) => {
    const errors = {};

    if (!article.documentType) {
      errors.documentType = 'Document type is required';
    }

    if (!article.questionType) {
      errors.questionType = 'Question type is required';
    }

    if (article.type === 'hse') {
    }

    if (article.type === 'sse') {
      SSE_VALIDATIONS.forEach((validation) => {
        validateFilters(article.filters, validation, errors);
      });
    }

    if (article.status === 'Deleted' && article.deletedReason === '') {
      errors.deletedReason =
        'You must enter a reason for marking status as deleted';
    }

    if (_.isEmpty(errors)) {
      resolve();
    } else {
      reject(errors);
    }
  });

const validateFilters = (filters, validation, errors) => {
  const { key, msg } = validation;

  const results = _.filter(filters, (filter) => {
    return filter.indexOf(key) >= 0;
  });

  if (results.length === 0) {
    errors[key] = msg;
  }
};

const SSE_VALIDATIONS = [
  {
    key: 'programsServices',
    msg: 'At least 1 Program & Service is required',
  },
  {
    key: 'sustainableDevelopmentGoals',
    msg: 'At least 1 Sustainable development goal is required',
  },
];
