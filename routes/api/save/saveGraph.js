const router = require("express").Router();
const saveGraphController = require("../../../controllers/saveGraphController");

router.route("/")
    .post(saveGraphController.saveGraph)

module.exports = router