const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("All routes!");
});

module.exports = router;
