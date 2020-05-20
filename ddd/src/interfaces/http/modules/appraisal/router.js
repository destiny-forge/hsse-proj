const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  createUseCase,
  getUseCase,
  listUseCase,
  compareUseCase,
  resolveUseCase,
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
   *       - Appraisal
   *     description: Appraisal creation
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Appraisal fields
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/appraisal'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/", (req, res) => {
    const { body, user } = req;
    const appraisal = {
      ...body,
      userId: user._id,
    };
    createUseCase
      .create(appraisal)
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
   *       - Appraisal
   *     description: Appraisal compare by shortArticleId and userId
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Appraisal compare
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/appraisal'
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

  /**
   * @swagger
   * /:
   *   get:
   *     tags:
   *       - Appraisal
   *     description: Appraisal resolution by shortArticleId and userId
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Appraisal resolution
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/appraisal'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.get("/resolve/:shortArticleId", (req, res) => {
    const { shortArticleId } = req.params;
    const { user } = req;
    resolveUseCase
      .resolve(shortArticleId, user._id)
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
   *       - Appraisal
   *     description: Appraisal filter by shortArticleId and userId
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Appraisal filter
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/appraisal'
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
   *       - Appraisal
   *     description: Apraisal list aggregate
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
    const { type, status } = req.query;
    listUseCase
      .list(type, status)
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
