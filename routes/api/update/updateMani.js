const router = require("express").Router();
const updateBrandController = require("../../../controllers/updateBrandController");

router.route("/")
    .post(updateBrandController.updateMani)

module.exports = router