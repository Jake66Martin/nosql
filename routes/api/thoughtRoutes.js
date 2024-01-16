const router = require("express").Router();

const {
    getAllThoughts
} = require('../../controllers/thoughtControllers')

router.route("/").get(getAllThoughts);


module.exports = router;
