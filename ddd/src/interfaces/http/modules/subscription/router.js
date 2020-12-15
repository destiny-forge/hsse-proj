const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  getUseCase,
  subscribeUseCase,
  unsubscribeUseCase,
  testUseCase,
  sendUseCase,
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
   *       - Subscription
   *     description: Get my subscription settings
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Email
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/email'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.get("/", (req, res) => {
    const { type, email } = req.body;
    getUseCase
      .get(type, email)
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
   *       - Subscription
   *     description: Subscribe to monthly emails
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Email
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/email'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/subscribe", (req, res) => {
    const { type, email, filters } = req.body;
    subscribeUseCase
      .subscribe(type, email, filters)
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
   *       - Subscription
   *     description: Subscribe to monthly emails
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Email
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/email'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/unsubscribe", (req, res) => {
    const { type, email } = req.body;
    unsubscribeUseCase
      .unsubscribe(type, email)
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
   *       - Subscription
   *     description: Test sending monthly subscription to recipients
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Email
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/email'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/test", (req, res) => {
    const { type, monthYear, recipients } = req.body;
    testUseCase
      .test(type, monthYear, recipients)
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
   *       - Subscription
   *     description: Send monthly email articles for subscription
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Email
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/email'
   *     responses:
   *       200:
   *         description: Successfully created
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/send", (req, res) => {
    const { type, monthYear } = req.body;
    sendUseCase
      .send(type, monthYear)
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
