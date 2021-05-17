const Status = require("http-status");
const { Router } = require("express");

module.exports = ({ detailUseCase, logger, response: { Success, Fail } }) => {
  const router = Router();

  /**
   * @swagger
   * /:
   *   post:
   *     tags:
   *       - Article detail
   *     description: Non authenticated article detail
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: q
   *         description: Article fields
   *         in: params
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/article'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.get("/:id", (req, res) => {
    const { id } = req.params;
    const { type, lang } = req.query;
    detailUseCase
      .detail(id, type, lang)
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
