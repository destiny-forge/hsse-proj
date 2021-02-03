module.exports = {
  version: process.env.APP_VERSION,
  port: process.env.PORT || 4000,
  timezone: process.env.TIMEZONE,
  logging: {
    maxsize: 100 * 1024, // 100mb
    maxFiles: 2,
    colorize: false,
  },
  authSecret: process.env.SECRET,
  authSession: {
    session: false,
  },
  frontend: process.env.FRONTEND_URL,
  api: {
    url: `localhost`,
  },
  mail: {
    from: "forum@mcmaster.ca",
    settings: {
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "ed.spinka98@ethereal.email",
        pass: "AsSyswC9tr54PxY9Mz",
      },
    },
  },
  s3: {
    bucket: process.env.HSSE_S3_Bucket,
    accessKeyId: process.env.HSSE_S3_ACCESS_KEY,
    secretAccessKey: process.env.HSSE_S3_SECRET_KEY,
  },
  elasticsearch: {
    nodes: ["http://localhost:9200"],
  },
};
