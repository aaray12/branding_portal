const router = require("express").Router();
const updateCompController = require("../../../controllers/updateCompController");

router.route("/")
    .post(updateCompController.updateSWOT)

module.exports = router