const router = require("express").Router();
const accessController = require("../../../controllers/accessController");

router.route("/")
    .post(accessController.giveRWAccess)

module.exports = router