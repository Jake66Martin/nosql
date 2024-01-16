const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtControllers')

router.route("/").get(getAllThoughts).post(createThought).put(updateThought)
router.route("/:thoughtId").get(getThoughtById).delete(deleteThought),



module.exports = router;
