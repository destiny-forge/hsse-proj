const Batch = require("src/domain/batch");
const { parse } = require("./parse");
const { s3 } = require("../../infra/aws");

/**
 * Batch creation
 */
module.exports = ({ batchRepository }) => {
  const create = async batch => {
    try {
      // if (!article.type || (article.type !== "sse" && article.type !== "hse")) {
      //   return {
      //     error: "A valid file is required"
      //   };
      // }
      console.log(batch);

      // Create batch
      const entity = Batch(batch);
      const newBatch = await batchRepository.create(entity);

      console.log(newBatch);

      // Create articles from csv and associate to batch
      const csv = await s3.getFile(batch.fileUrl);
      const articles = await parse(csv);

      articles.map(article => {
        // await HSEArticleBatchfileModelClass.find({ batchfileUrl: url }, (err, batchfile) => {
        //   console.log(batchfile);
        //   article._batchFile = newBatch._id;
        //   article.language = batch.language;
        //   article.source = batch.source;
        //   article.harvested = batch.harvested;
        // });
      });

      return newBatch;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    create
  };
};
