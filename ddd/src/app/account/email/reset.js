/* Account password reset email */
module.exports = ({ config, webToken, mailer }) => {
  const send = ({ id, email }) => {
    const createToken = webToken.sign({ expiresIn: '48h' });
    const token = createToken({ id, email });

    const url = `${config.frontend}/account/reset/${token}`;
    const subject = 'Reset Password Email';
    const html = `Please click the following link to reset your password: <a href="${url}">Reset Password</a>`;

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
