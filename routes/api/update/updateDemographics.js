const router = require("express").Router();
const updateAudController = require("../../../controllers/updateAudController");

router.route("/")
    .post(updateAudController.updateAudDemographics)

module.exports = router