const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought
} = require('../../controllers/thoughtControllers')

router.route("/").get(getAllThoughts).post(createThought).put(updateThought)
router.route("/:thoughtId").get(getThoughtById);



module.exports = router;
