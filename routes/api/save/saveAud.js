const router = require("express").Router();
const saveAudController = require("../../../controllers/saveAudController");

router.route("/")
    .post(saveAudController.saveAudience)

module.exports = router