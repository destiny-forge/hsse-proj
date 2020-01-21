const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  createUseCase,
  listUseCase,
  assignUseCase,
  logger,
  response: { Success, Fail }
}) => {
  const router = Router();

  /**
   * @swagger
   * /:
   *   post:
   *     tags:
   *       - Article
   *     description: Article creation
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Article fields
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
   *   post:
   *     tags:
   *       - Article
   *     description: Article assignment
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Article assignment fields
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/article/assign'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/assign", (req, res) => {
    assignUseCase
      .assign(req.body)
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
   *       - Article
   *     description: Article list by type
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
  router.get("/", (req, res) => {
    const { type, stage, status } = req.body;
    listUseCase
      .list(type, stage, status)
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
