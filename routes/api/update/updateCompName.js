const router = require("express").Router();
const updateCompController = require("../../../controllers/updateCompController");

router.route("/")
    .post(updateCompController.updateCompName)

module.exports = router