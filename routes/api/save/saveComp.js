const router = require("express").Router();
const saveCompController = require("../../../controllers/saveCompController");

router.route("/")
    .post(saveCompController.saveComp1)

module.exports = router