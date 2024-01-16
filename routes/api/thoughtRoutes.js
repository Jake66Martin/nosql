const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtControllers')

router.route("/").get(getAllThoughts).post(createThought).put(updateThought);
router.route("/:thoughtId").get(getThoughtById).delete(deleteThought);
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);



module.exports = router;
