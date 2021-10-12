const router = require("express").Router();
const saveBrandController = require("../../../controllers/saveBrandController");

router.route("/")
    .post(saveBrandController.saveBrandColors)

module.exports = router