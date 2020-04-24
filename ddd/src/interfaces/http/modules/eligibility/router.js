const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  createUseCase,
  getUseCase,
  compareUseCase,
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
   *       - Eligibility
   *     description: Eligibility creation
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Eligibility fields
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/eligibility'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/", (req, res) => {
    const { body, user } = req;
    const filter = {
      ...body,
      userId: user._id,
    };
    createUseCase
      .create(filter)
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
   *       - Eligibility
   *     description: Eligibility filter by shortArticleId and userId
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Eligibility filter
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/eligibility'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.get("/:shortArticleId", (req, res) => {
    const { shortArticleId } = req.params;
    const { user } = req;
    getUseCase
      .get(shortArticleId, user._id)
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
   *       - Eligibility
   *     description: Eligibility filter by shortArticleId and userId
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Eligibility filter
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/eligibility'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.get("/compare/:shortArticleId", (req, res) => {
    const { shortArticleId } = req.params;
    const { user } = req;
    compareUseCase
      .compare(shortArticleId, user._id)
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
