const { s3 } = require("../../infra/aws");

module.exports = ({ config }) => {
  const { bucket, accessKeyId, secretAccessKey } = config.s3;
  const S3 = s3({ bucket, accessKeyId, secretAccessKey });

  return {
    getSignedUrl: S3.getSignedUrl,
    getFile: S3.getFile
  };
};
