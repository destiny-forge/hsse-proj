const { confirm, reset } = require('./email');

/**
 * Account related event handlers
 */
module.exports = ({ config, webToken, events, mailer }) => {
  const confirmEmail = confirm({ config, webToken, mailer });
  const resetEmail = reset({ config, webToken, mailer });

  events.on('account.registered', confirmEmail.send);
  events.on('account.reset', resetEmail.send);
};
