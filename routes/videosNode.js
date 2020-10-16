const express = require("express");
const router = express.Router();
const VideoNode = require("../model/NodesJsvideos");

router.get("/", async (req, res) => {
  await VideoNode.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

router.post("/", async (req, res) => {
  videos = new VideoNode({
    title: req.body.title,
    url: req.body.url
  });
  await videos.save();
  res.json("new video added");
});

// router.delete("/:id", async (req, res) => {
//   await Videos.findByIdAndDelete(req.params.id);
//   res.json("video deleted");
// });

module.exports = router;
