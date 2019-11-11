const { sendConfirmation } = require('./email');

/**
 * Account registration events
 */
module.exports = ({ events, webToken }) => {
  events.on('account.registered', (...args) => {
    const createToken = webToken.sign({ expiresIn: '48h' });
    const token = createToken(...args);
    return sendConfirmation(token);
  });
};
