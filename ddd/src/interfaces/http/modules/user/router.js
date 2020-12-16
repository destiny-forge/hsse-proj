const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  updateUseCase,
  searchUseCase,
  logger,
  auth,
  response: { Success, Fail },
}) => {
  const router = Router();
  router.use(auth.authenticate());

  /**
   * @swagger
   * /users/search:
   *   get:
   *     tags:
   *       - Users
   *     description: Search for a user by email or role
   *     security:
   *       - JWT: []
   *     responses:
   *       200:
   *         description: An array of users
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/user'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */
  router.get("/search", (req, res) => {
    const { email, role } = req.query;
    searchUseCase
      .search(email, role)
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
   * /users:
   *   post:
   *     tags:
   *       - Users
   *     description: Update an existing user
   *     security:
   *       - JWT: []
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: User's Entity
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/user'
   *     responses:
   *       200:
   *         description: Successfully Created
   *         schema:
   *           $ref: '#/definitions/user'
   *       401:
   *         $ref: '#/responses/Unauthorized'
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router.post("/", (req, res) => {
    const { _id, email, role, settings } = req.body;
    updateUseCase
      .update({ _id, email, role, settings })
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
