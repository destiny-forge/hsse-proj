const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  editUseCase,
  getUseCase,
  logger,
  auth,
  response: { Success, Fail },
}) => {
  const router = Router();
  router.use(auth.authenticate());

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
   *       - Profile
   *     description: Edit user profile details
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
   *           $ref: '#/definitions/role'
   *     responses:
   *       200:
   *         description: Successfully login
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/", (req, res) => {
    editUseCase
      .edit({ body: req.body })
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
   *       - Role
   *     description: Remove role
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
   *           $ref: '#/definitions/role'
   *     responses:
   *       200:
   *         description: Successfully login
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.get("/:id", (req, res) => {
    getUseCase
      .get({ id: req.params.id })
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
