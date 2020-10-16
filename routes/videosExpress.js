const express = require("express");
const router = express.Router();
const VideoExpressJS = require("../model/ExpressJSvideos");

router.get("/", async (req, res) => {
  await VideoExpressJS.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

router.post("/", async (req, res) => {
  videos = new VideoExpressJS({
    title: req.body.title,
    url: req.body.url
  });
  await videos.save();
  res.json("new video added");
});
router.put("/:id", async (req, res) => {
  await VideoExpressJS.findByIdAndUpdate(req.params.id,req.body)
  res.json("video updated");
})
module.exports = router;