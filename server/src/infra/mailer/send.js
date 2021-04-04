const nodemailer = require("nodemailer");
const ses = require("nodemailer-ses-transport");

class Mailer {
  constructor({ config }) {
    this.from = config.mail.from;
    const transport =
      config.env === "development"
        ? config.mail.settings
        : ses(config.mail.settings);
    this.transporter = nodemailer.createTransport(transport);
  }
  send({ to, subject, html }) {
    this.transporter.sendMail({
      from: this.from,
      to,
      subject,
      html
    });
  }
}

module.exports = Mailer;
