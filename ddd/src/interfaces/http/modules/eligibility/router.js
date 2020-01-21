const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  createUseCase,
  getUseCase,
  logger,
  response: { Success, Fail }
}) => {
  const router = Router();

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
    const { userId } = req.body; // ideally this comes from req middleware not body
    const { shortArticleId } = req.params;
    getUseCase
      .get(shortArticleId, userId)
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
