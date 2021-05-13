const Status = require("http-status");
const { Router } = require("express");

module.exports = ({ latestUseCase, response: { Success, Fail } }) => {
  const router = Router();
  //router.use(auth.authenticate());

  /**
   * @swagger
   * /:
   *   post:
   *     tags:
   *       - Article suggestions search
   *     description: Article suggestions
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: site, language
   *         description: site and language
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
  router.get("/", (req, res) => {
    const { type, lang } = req.query;
    latestUseCase
      .latest(type, lang)
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
