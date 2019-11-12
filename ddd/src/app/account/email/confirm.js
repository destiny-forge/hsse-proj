/* Confirm registration email */
module.exports = ({ config, webToken, mailService }) => {
  const send = ({ id, email }) => {
    const createToken = webToken.sign({ expiresIn: '48h' });
    const token = createToken({ id, email });

    const url = `${config.api.url}:${config.port}/api/account/confirm/${token}`;
    const subject = 'Confirm Registration Email';
    const html = `Please click the following link to confirm your email: <a href="${url}">Confirm Email</a>`;

    const status = mailService.send({
      to: email,
      subject,
      html
    });

    return status;
  };

  return {
    send
  };
};
