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

router.route("/").get(getAllUsers).post(createNewUser).put(updateUser);;
router.route("/:userId").get(getUserById).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router;
