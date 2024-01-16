const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser, 
  deleteUser
} = require("../../controllers/userControllers");

router.route("/").get(getAllUsers).post(createNewUser);
router.route("/:userId").get(getUserById);
router.route('/').put(updateUser);
router.route('/:userId').delete(deleteUser)

module.exports = router;
