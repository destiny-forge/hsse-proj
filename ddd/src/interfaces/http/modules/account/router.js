const Status = require('http-status');
const { Router } = require('express');

module.exports = ({
  registerUseCase,
  resetUseCase,
  confirmUseCase,
  logger,
  response: { Success, Fail }
}) => {
  const router = Router();

  /**
   * @swagger
   * definitions:
   *   auth:
   *     properties:
   *       email:
   *         type: string
   *       password:
   *         type: string
   */

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
  router.post('/register', (req, res) => {
    const { email, password } = req.body;
    registerUseCase
      .register(email, password)
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
  router.post('/reset/:token', (req, res) => {
    resetUseCase
      .reset({ token: req.params.token })
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
  router.post('/confirm/:token', (req, res) => {
    confirmUseCase
      .confirm({ token: req.params.token })
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
