const Status = require("http-status");
const { Router } = require("express");

module.exports = ({ createUseCase, logger, response: { Success, Fail } }) => {
  const router = Router();

  /**
   * @swagger
   * /:
   *   post:
   *     tags:
   *       - Batch
   *     description: Batch notes article update
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Articles
   *         in: body
   *         required: true
   *         type: [article]
   *         schema:
   *           $ref: '#/definitions/notes'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/", (req, res) => {
    console.log(req.body);
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

  return router;
};
