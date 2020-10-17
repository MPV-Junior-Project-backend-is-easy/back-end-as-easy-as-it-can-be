const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/", async (req, res) => {
  await User.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

router.get("/:id", async (req, res) => {
  await User.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});

router.post("/", async (req, res) => {
  user = new User({
    userName: req.body.userName,
    password: req.body.password,
    // resNode : res.body.resNode,
    // resExpress : res.body.resExpress,
    // resMongoo : res.body.resMongoo,

  });
  await user.save();
  res.json("new user added");
});

router.put("/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.json("user updated");
});

router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json("user deleted");
});

router.delete("/", async (req, res) => {
  await User.deleteMany(req.body);
  res.json("users deleted");
});

module.exports = router;
