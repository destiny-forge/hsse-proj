const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  getUseCase,
  editUseCase,
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
    if (!req.user) {
      res.status(Status.BAD_REQUEST).json(Fail("must be logged in"));
      return;
    }
    getUseCase
      .get(req.user._id)
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
  router.post("/", (req, res) => {
    if (!req.user) {
      res.status(Status.BAD_REQUEST).json(Fail("must be logged in"));
      return;
    }
    let { _id } = req.user;
    let { subscriptions } = req.body;

    editUseCase
      .edit(_id, subscriptions)
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
    const { type, date, recipients } = req.body;
    testUseCase
      .test(type, date, recipients)
      .then((data) => {
        res.status(Status.OK).json(Success(data));
      })
      .catch((error) => {
        console.log(error);
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
    const { type, date } = req.body;
    sendUseCase
      .send(type, date)
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
