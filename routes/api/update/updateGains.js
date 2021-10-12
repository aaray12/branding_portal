const router = require("express").Router();
const updateAudController = require("../../../controllers/updateAudController");

router.route("/")
    .post(updateAudController.updateAudGains)

module.exports = router