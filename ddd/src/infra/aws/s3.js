const axios = require("axios");
const AWS = require("aws-sdk");
const uuid = require("uuid/v1");

module.exports = ({ bucket, accessKeyId, secretAccessKey, contentType }) => {
  const s3 = new AWS.S3({ accessKeyId, secretAccessKey });

  getSignedUrl = async () => {
    const key = `${Date.now()}-${uuid()}.txt`;
    return new Promise((resolve, reject) => {
      s3.getSignedUrl(
        "putObject",
        {
          Bucket: bucket,
          ContentType: contentType || "text/plain",
          Key: key,
        },
        (err, url) => {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve({ key, url });
        }
      );
    });
  };

  getFile = async (url) => {
    //const result = await axios.get(`https://s3.amazonaws.com/${bucket}/${url}`);
    const file = url.split("?")[0];
    const result = await axios.get(file);
    return result.data;
  };

  return {
    getSignedUrl,
    getFile,
  };
};
