const router = require("express").Router();
const updateCompController = require("../../../controllers/updateCompController");

router.route("/")
    .post(updateCompController.updateCompMsg)

module.exports = router