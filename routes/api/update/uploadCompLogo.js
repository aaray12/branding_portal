const router = require("express").Router();
const updateCompController = require("../../../controllers/updateCompController");

router.route("/")
    .post(updateCompController.updateCompLogos)

module.exports = router