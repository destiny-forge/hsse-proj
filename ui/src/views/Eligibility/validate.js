import _ from 'lodash';

export default (eligibility) =>
  new Promise((resolve, reject) => {
    const errors = {};

    if (!eligibility.documentType) {
      errors.documentType = 'Document type is required';
    }

    if (!eligibility.questionType) {
      errors.questionType = 'Question type is required';
    }

    if (eligibility.type === 'hse') {
    }

    if (eligibility.type === 'sse') {
      SSE_VALIDATIONS.forEach((validation) => {
        validateFilters(eligibility.filters, validation, errors);
      });
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
