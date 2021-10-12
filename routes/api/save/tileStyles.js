const router = require("express").Router();
const saveBrandController = require("../../../controllers/saveBrandController");

router.route("/")
    .post(saveBrandController.saveTileStyles)

module.exports = router