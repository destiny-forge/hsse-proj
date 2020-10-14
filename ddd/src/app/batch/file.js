const { s3 } = require("../../infra/aws");

module.exports = ({ config, type, contentType }) => {
  const { bucket, accessKeyId, secretAccessKey } = config.s3;
  const S3 = s3({
    bucket: `${bucket}/${type}`,
    accessKeyId,
    secretAccessKey,
    contentType,
  });

  return {
    getSignedUrl: S3.getSignedUrl,
    getFile: S3.getFile,
  };
};
