const express = require("express");
const router = express.Router();
const VideoExpressJS = require("../model/ExpressJSvideos");

router.get("/", async (req, res) => {
  await VideoExpressJS.find({}, (err, data) => {
    res.json(data);
  });
});

router.get("/:id", async (req, res) => {
  await VideoExpressJS.findById(req.params.id,(err, data)=>{
    res.json(data);
  })
})

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

router.delete("/:id", async (req, res) => {
  await VideoExpressJS.findByIdAndDelete(req.params.id);
  res.json("video deleted");
});

router.delete('/',async (req,res) => {
  await VideoExpressJS.deleteMany(req.body)
  res.json("all videos deleted")
})
module.exports = router;