const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');

/* @TODO - replace this on local develop with fake mailer
 * Also, swap out the process.env for config settings and
 * move it under the module.exports ftw :)
 */
const transporter = nodemailer.createTransport(
  ses({
    accessKeyId: process.env.HSSE_SES_ACCESS_KEY,
    secretAccessKey: process.env.HSSE_SES_SECRET_KEY,
    region: process.env.REGION
  })
);

module.exports = ({ config }) => {
  console.log(config);

  /* note: what about text version? */
  const send = ({ to, subject, html }) => {
    transporter.sendMail({
      from: config.mail.from,
      to,
      subject,
      html
    });
  };

  return {
    send
  };
};
