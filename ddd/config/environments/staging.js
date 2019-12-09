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
  frontend: process.env.FRONTEND_SERVER,
  mail: {
    from: "forum@mcmaster.ca",
    settings: {
      accessKeyId: process.env.HSSE_SES_ACCESS_KEY,
      secretAccessKey: process.env.HSSE_SES_SECRET_KEY,
      region: process.env.REGION
    }
  }
};
