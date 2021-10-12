const router = require("express").Router();
const saveBrandController = require("../../controllers/saveBrandController");

router.route("/:id")
    .get(saveBrandController.getBrand)

module.exports = router