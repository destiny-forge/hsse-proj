const Status = require("http-status");
const { Router } = require("express");

module.exports = ({
  editUseCase,
  logger,
  auth,
  response: { Success, Fail },
}) => {
  const router = Router();
  router.use(auth.authenticate());

  /**
   * @swagger
   * /token:
   *   post:
   *     tags:
   *       - Profile
   *     description: Edit account email and password
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: User's email and or password
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
    const { id, email, password, confirm } = req.body;

    console.log(req.user, id);

    if (!req.user || req.user._id !== id) {
      logger.error("turn your hacks down"); // we still need to log every error for debugging
      return res.status(Status.BAD_REQUEST).json(Fail("turn your hacks down"));
    }

    editUseCase
      .edit(req.user._id, email, password, confirm)
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
