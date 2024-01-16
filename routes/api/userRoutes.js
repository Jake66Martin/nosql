const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser, 
  deleteUser, 
  addFriend,
  removeFriend
} = require("../../controllers/userControllers");

router.route("/").get(getAllUsers).post(createNewUser);
router.route("/:userId").get(getUserById);
router.route('/').put(updateUser);
router.route('/:userId').delete(deleteUser)
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router;
