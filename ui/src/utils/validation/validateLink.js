import _ from 'lodash';

export default (link) =>
  new Promise((resolve, reject) => {
    const errors = {};

    if (!link.name) {
      errors.name = 'Link name is required';
    }

    if (!link.url) {
      errors.url = 'Link url is required';
    } else if (link.url === '' || link.url.indexOf('http') === -1) {
      errors.url = 'Link url must start with http';
    }

    if (_.isEmpty(errors)) {
      resolve();
    } else {
      reject(errors);
    }
  });
