const jwt = require('jsonwebtoken');
const { compose, trim, replace, partialRight } = require('ramda');

module.exports = ({ config }) => ({
  sign: options => payload => {
    return jwt.sign(payload, config.authSecret, options || {});
  },
  signin: options => payload => {
    const opt = Object.assign({}, options, { expiresIn: '1h' });
    return jwt.sign(payload, config.authSecret, opt);
  },
  confirm: options => token => {
    const opt = Object.assign({}, options);
    return jwt.confirm(token, config.authSecret, opt);
  },
  decode: options => token => {
    const opt = Object.assign({}, options);
    const decodeToken = compose(
      partialRight(jwt.decode, [opt]),
      trim,
      replace(/JWT|jwt/g, '')
    );

    return decodeToken(token);
  }
});
