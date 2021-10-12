const router = require("express").Router();
const updateMarkController = require("../../../controllers/updateMarkController");

router.route("/")
    .post(updateMarkController.updateDigital)

module.exports = router