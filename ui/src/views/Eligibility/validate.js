import _ from 'lodash';

export default (eligibility) =>
  new Promise((resolve, reject) => {
    const errors = {};

    if (!eligibility.documentType) {
      errors.documentType = 'Required';
    }

    if (!eligibility.questionType) {
      errors.questionType = 'Required';
    }

    if (_.isEmpty(errors)) {
      resolve();
    } else {
      reject(errors);
    }
  });
