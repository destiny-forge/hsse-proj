const { confirm } = require('./email');

/**
 * Account related event handlers
 */
module.exports = ({ config, webToken, events, mailer }) => {
  const confirmEmail = confirm({ config, webToken, mailer });

  events.on('account.registered', confirmEmail.send);
};
