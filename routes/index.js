const path = require("path");
const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");
//const saveBrandController = require("../controllers/saveBrandController");

// API Route
router.use("/api", apiRoutes);
//  router.route("/api/brand").post(saveBrandController.saveBrand);
//  router.route("/api/brand/:id").get(saveBrandController.getBrand);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;