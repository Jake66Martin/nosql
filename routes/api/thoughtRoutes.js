const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction
} = require('../../controllers/thoughtControllers')

router.route("/").get(getAllThoughts).post(createThought).put(updateThought)
router.route("/:thoughtId").get(getThoughtById).delete(deleteThought),
router.route('/:thoughtId/reactions').post(createReaction).delete()



module.exports = router;
