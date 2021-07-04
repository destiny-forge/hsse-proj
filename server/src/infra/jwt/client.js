const jwt = require("jsonwebtoken");
const { compose, trim, replace, partialRight } = require("ramda");

module.exports = ({ config }) => ({
  sign: (options) => (payload) => {
    return jwt.sign(payload, config.authClientSecret, options || {});
  },
  signin: (options) => (payload) => {
    const opt = Object.assign({}, options, { expiresIn: "1h" });
    return jwt.sign(payload, config.authClientSecret, opt);
  },
  verify: (options) => (token) => {
    const opt = Object.assign({}, options);
    return jwt.verify(token, config.authClientSecret, opt);
  },
  decode: (options) => (token) => {
    const opt = Object.assign({}, options);
    const decodeToken = compose(
      partialRight(jwt.decode, [opt]),
      trim,
      replace(/JWT|jwt/g, "")
    );

    return decodeToken(token);
  },
});
