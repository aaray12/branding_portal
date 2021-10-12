const router = require("express").Router();
const updateAudController = require("../../../controllers/updateAudController");

router.route("/")
    .post(updateAudController.updateAudInsights)

module.exports = router