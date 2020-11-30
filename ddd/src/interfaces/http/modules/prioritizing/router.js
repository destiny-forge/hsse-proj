const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  listUseCase,
  liveUseCase,
  assignUseCase,
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
   *     description: Prioritizing article list by type
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
  router.get("/go-live", (req, res) => {
    const { type } = req.query;
    listUseCase
      .listGoLive(type)
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
   *       - Presentation
   *     description: Prioritizing article list by type
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
  router.get("/waiting", (req, res) => {
    const { type } = req.query;
    listUseCase
      .listWaiting(type)
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
   *   post:
   *     tags:
   *       - Presentation
   *     description: Prioritizing assign batch to this months update
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
  router.post("/assign", (req, res) => {
    const { batchId, monthlyUpdateDate } = req.body;
    assignUseCase
      .assign(batchId, monthlyUpdateDate)
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
   *   post:
   *     tags:
   *       - Presentation
   *     description: Prioritizing make live w/o monthly update
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
  router.post("/make-live", (req, res) => {
    const { batchId } = req.body;
    liveUseCase
      .makeLive(batchId)
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
   *   post:
   *     tags:
   *       - Presentation
   *     description: Prioritizing go live w/o translations
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
  router.post("/go-live", (req, res) => {
    const { monthlyUpdateDate } = req.body;
    liveUseCase
      .goLive(monthlyUpdateDate)
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
