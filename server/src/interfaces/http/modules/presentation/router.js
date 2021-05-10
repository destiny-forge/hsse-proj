const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
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
   *   get:
   *     tags:
   *       - Presentation
   *     description: Presentation article list by type
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Article type
   *         in: body
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
  router.get("/list/doc-type", (req, res) => {
    const { type, documentType, filter } = req.query;
    listUseCase
      .listByDocType(type, documentType, filter)
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
