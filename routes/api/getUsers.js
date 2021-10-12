const router = require("express").Router();
const saveBrandController = require("../../controllers/saveBrandController");

router.route("/")
    .get(saveBrandController.getUsers)

module.exports = router