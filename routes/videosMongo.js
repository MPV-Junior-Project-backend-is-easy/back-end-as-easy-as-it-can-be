const express = require("express");
const router = express.Router();
const VideoMongo = require("../model/MongoDBvideos.js");

router.get("/", async (req, res) => {
  await VideoMongo.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});
router.post("/", async (req, res) => {
  videos = new VideoMongo({
    title: req.body.title,
    url: req.body.url
  });
  await videos.save();
  res.json("new video added");
});
router.put("/:id", async (req, res) => {
  await VideoMongo.findByIdAndUpdate(req.params.id,req.body)
  res.json("video updated");
})
module.exports = router;