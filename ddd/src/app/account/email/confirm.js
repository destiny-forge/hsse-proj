/* Confirm registration email */
module.exports = ({ config, mailService }) => {
  const sendConfirmation = token => {
    const url = `${config.backendServer}/confirmuser/${token}`;
    const subject = 'Confirm Registration Email';
    const html = `Please click this email to confirm your email: <a href="${url}">${url}</a>`;

    const sentStatus = mailService.send({
      to: newUser.email,
      subject,
      html
    });

    return sentStatus;
  };

  return {
    sendConfirmation
  };
};
