const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  createUseCase,
  listUseCase,
  logger,
  auth,
  response: { Success, Fail },
}) => {
  const router = Router();

  router.use(auth.authenticate());

  /**
   * @swagger
   * /:
   *   post:
   *     tags:
   *       - Translation
   *     description: Translation creation
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: language
   *         description: Translation fields
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/translation'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/", (req, res) => {
    createUseCase
      .create(req.body)
      .then((data) => {
        res.status(Status.OK).json(Success(data));
      })
      .catch((error) => {
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
   *     description: Translation get by articleId
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: articleId
   *         description: articleId
   *         in: params
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/translation'
   *       - name: language
   *         description: ISO 2 character language code
   *         in: query
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/translation'
   *
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.get("/:language/:priority", (req, res) => {
    const { language, priority } = req.params;
    listUseCase
      .list(language, priority)
      .then((data) => {
        res.status(Status.OK).json(Success(data));
      })
      .catch((error) => {
        logger.error(error); // we still need to log every error for debugging
        res.status(Status.BAD_REQUEST).json(Fail(error.message));
      });
  });

  return router;
};
