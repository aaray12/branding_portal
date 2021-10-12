const router = require("express").Router();
const updateMarkController = require("../../../controllers/updateMarkController");

router.route("/")
    .post(updateMarkController.updatePrints)

module.exports = router