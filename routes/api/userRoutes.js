const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createNewUser
} = require("../../controllers/userControllers");

router.route("/").get(getAllUsers).post(createNewUser);
router.route("/:userId").get(getUserById);


module.exports = router;
