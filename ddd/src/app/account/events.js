const { confirm } = require('./email');

/**
 * Account related event handlers
 */
module.exports = ({ config, webToken, events, mailService }) => {
  const confirmEmail = confirm({ config, webToken, mailService });

  events.on('account.registered', confirmEmail.send);
};
