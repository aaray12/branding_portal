const router = require("express").Router();
const saveBrandController = require("../../../controllers/saveBrandController");

router.route("/")
    .post(saveBrandController.uploadSG)

module.exports = router