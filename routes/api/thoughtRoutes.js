const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought
} = require('../../controllers/thoughtControllers')

router.route("/").get(getAllThoughts).post(createThought);
router.route("/:thoughtId").get(getThoughtById);



module.exports = router;
