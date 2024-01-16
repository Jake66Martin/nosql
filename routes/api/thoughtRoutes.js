const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById
} = require('../../controllers/thoughtControllers')

router.route("/").get(getAllThoughts);
router.route("/:thoughtId").get(getThoughtById);



module.exports = router;
