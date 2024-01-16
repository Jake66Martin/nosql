const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser
} = require("../../controllers/userControllers");

router.route("/").get(getAllUsers).post(createNewUser);
router.route("/:userId").get(getUserById);
router.route('/').put(updateUser);


module.exports = router;
