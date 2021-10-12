const router = require("express").Router();
const updateMarkController = require("../../../controllers/updateMarkController");

router.route("/")
    .post(updateMarkController.updateSubStrats)

module.exports = router