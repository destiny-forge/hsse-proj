/* Confirm registration email */
module.exports = ({ config, webToken, mailer }) => {
  const send = ({ id, email }) => {
    const createToken = webToken.sign({ expiresIn: '48h' });
    const token = createToken({ id, email });

    const url = `${config.frontend}/account/confirm/${token}`;
    const subject = 'Confirm Registration Email';
    const html = `Please click the following link to confirm your email: <a href="${url}">Confirm Email</a>`;

    mailer.send({
      to: email,
      subject,
      html
    });
  };

  return {
    send
  };
};
