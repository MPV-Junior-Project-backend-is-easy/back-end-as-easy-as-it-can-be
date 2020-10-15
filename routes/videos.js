const express = require("express");
const router = express.Router();
const Videos = require("../model/videos");

router.get("/", async (req, res) => {
  await Videos.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

module.exports = router;
