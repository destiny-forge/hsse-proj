const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  registerUseCase,
  resetUseCase,
  confirmUseCase,
  logger,
  response: { Success, Fail },
}) => {
  const router = Router();

  /**
   * @swagger
   * /token:
   *   post:
   *     tags:
   *       - Authentication
   *     description: Account registration
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: User's credentials
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/account'
   *     responses:
   *       200:
   *         description: Successfully login
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/register", (req, res) => {
    const { type, email, password } = req.body;
    registerUseCase
      .register(type, email, password)
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
   * /token:
   *   post:
   *     tags:
   *       - Authentication
   *     description: Account reset
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: email
   *         description: User's email address
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/account'
   *     responses:
   *       200:
   *         description: Successfully login
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/reset", (req, res) => {
    const { type, email } = req.body;
    resetUseCase
      .send(type, email)
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
   * /token:
   *   post:
   *     tags:
   *       - Account
   *     description: Account password reset
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: Auth token for this user
   *         in: querystring
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/account'
   *       - name: password
   *         description: New password
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/account'
   *     responses:
   *       200:
   *         description: Successfully login
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/reset/:token", (req, res) => {
    const { token } = req.params;
    const { type, password } = req.body;
    resetUseCase
      .reset(type, token, password)
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
   * /token:
   *   post:
   *     tags:
   *       - Authentication
   *     description: Account confirmation
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: token
   *         description: User's jwt
   *         in: querystring
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/account'
   *     responses:
   *       200:
   *         description: Successfully login
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/confirm/:token", (req, res) => {
    confirmUseCase
      .confirm({ token: req.params.token })
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
