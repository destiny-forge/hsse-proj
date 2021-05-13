const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  authenticateUseCase,
  logger,
  response: { Success, Fail },
}) => {
  const router = Router();

  /**
   * @swagger
   * definitions:
   *   authenticate:
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
   *     description: Authenticate
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
   *           $ref: '#/definitions/auth'
   *     responses:
   *       200:
   *         description: Successfully login
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/authenticate", (req, res) => {
    const { type, email, password } = req.body;
    authenticateUseCase
      .authenticate(type, email, password)
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
