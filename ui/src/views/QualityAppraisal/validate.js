import _ from 'lodash';

export default (appraisal) =>
  new Promise((resolve, reject) => {
    const errors = {};

    if (!appraisal.status) {
      errors.documentType = 'Status is required';
    }

    appraisal.questions.forEach((q, i) => {
      if (q.value === '') {
        errors[q.key] = `Question # ${i + 1} is required`;
      }
    });

    if (appraisal.type === 'hse') {
    }

    if (appraisal.type === 'sse') {
    }

    if (_.isEmpty(errors)) {
      resolve();
    } else {
      reject(errors);
    }
  });
