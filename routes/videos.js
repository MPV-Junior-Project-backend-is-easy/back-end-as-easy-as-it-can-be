const express = require("express");
const router = express.Router();
const Videos = require("../model/videos");

router.get("/", async (req, res) => {
  await Videos.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

// router.post("/", async (req, res) => {
//   videos = new Videos({
//     title: req.body.title,
//     url: req.body.url,
//     height : req.body.height,
//     width : req.body.width
//   });
//   await videos.save();
//   res.json("new video added");
// });

// router.delete("/:id", async (req, res) => {
//   await Videos.findByIdAndDelete(req.params.id);
//   res.json("video deleted");
// });

module.exports = router;
