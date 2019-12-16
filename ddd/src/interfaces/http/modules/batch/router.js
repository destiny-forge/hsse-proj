const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  createUseCase,
  listUseCase,
  fileUseCase,
  logger,
  response: { Success, Fail }
}) => {
  const router = Router();

  /**
   * @swagger
   * /:
   *   post:
   *     tags:
   *       - Batch
   *     description: Batch article creation
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Batch fields
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/batch'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/", (req, res) => {
    createUseCase
      .create(req.body)
      .then(data => {
        res.status(Status.OK).json(Success(data));
      })
      .catch(error => {
        logger.error(error); // we still need to log every error for debugging
        res.status(Status.BAD_REQUEST).json(Fail(error.message));
      });
  });

  /**
   * @swagger
   * /:
   *   get:
   *     tags:
   *       - Batch
   *     description: Batch list by type
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Batch type
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/batch'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.get("/", (req, res) => {
    const { type } = req.body;
    listUseCase
      .list(type)
      .then(data => {
        res.status(Status.OK).json(Success(data));
      })
      .catch(error => {
        logger.error(error); // we still need to log every error for debugging
        res.status(Status.BAD_REQUEST).json(Fail(error.message));
      });
  });

  /**
   * @swagger
   * /:
   *   get:
   *     tags:
   *       - Batch
   *     description: Get S3 signed url
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Batch type
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/batch/signed-url'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.get("/signed-url", (req, res) => {
    const { type } = req.body;
    fileUseCase
      .getSignedUrl(type)
      .then(data => {
        res.status(Status.OK).json(Success(data));
      })
      .catch(error => {
        logger.error(error); // we still need to log every error for debugging
        res.status(Status.BAD_REQUEST).json(Fail(error.message));
      });
  });

  return router;
};
