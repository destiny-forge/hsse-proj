import _ from 'lodash';

export default (study) =>
  new Promise((resolve, reject) => {
    const errors = {};

    if (!study.status) {
      errors.documentType = 'Status is required';
    }

    if (study.type === 'hse') {
    }

    if (study.type === 'sse') {
    }

    if (_.isEmpty(errors)) {
      resolve();
    } else {
      reject(errors);
    }
  });
