module.exports = {
  version: process.env.APP_VERSION,
  port: process.env.PORT || 4000,
  timezone: process.env.TIMEZONE,
  logging: {
    maxsize: 100 * 1024, // 100mb
    maxFiles: 2,
    colorize: false
  },
  authSecret: process.env.SECRET,
  authSession: {
    session: false
  },
  frontend: 'localhost:4000',
  api: {
    url: `localhost`
  },
  mail: {
    from: 'forum@mcmaster.ca',
    settings: {
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'real.user',
        pass: 'verysecret'
      }
    }
  }
};